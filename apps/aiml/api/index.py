from http.server import BaseHTTPRequestHandler
import json
import aiml

k = aiml.Kernel()
k.loadBrain("api/brain.dump")

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api':
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.add_cors_headers()  # ✅ Corrected
            self.end_headers()
            self.wfile.write("Hello from AIML API!".encode('utf-8'))
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.add_cors_headers()
            self.end_headers()
            self.wfile.write("404 Not Found".encode('utf-8'))

    def do_POST(self):
        if self.path == '/api':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            json_data = json.loads(post_data.decode('utf-8'))
            question = json_data.get('question', '')

            response = self.get_response(question)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.add_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({'response': response}).encode('utf-8'))
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.add_cors_headers()
            self.end_headers()
            self.wfile.write("404 Not Found".encode('utf-8'))

    def do_OPTIONS(self):  # ✅ Added for CORS preflight
        self.send_response(200)
        self.add_cors_headers()
        self.end_headers()

    def get_response(self, question):
        return k.respond(question)

    def add_cors_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')  # ✅ Added OPTIONS
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
