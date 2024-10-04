from http.server import BaseHTTPRequestHandler
import json
import aiml

k = aiml.Kernel()
k.loadBrain("api/brain.dump")

class handler(BaseHTTPRequestHandler):
    BRAIN_FILE = "brain.dump"

    def do_GET(self):
        if self.path == '/api':
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.add_cors_headers()
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
            question = json_data.get('question')

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

    def get_response(self, question):
        return k.respond(question)

    def add_cors_headers(self):
        allowed_origins = [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://johndoing.vercel.app"
        ]
        origin = self.headers.get('Origin')
        if origin in allowed_origins:
            self.send_header('Access-Control-Allow-Origin', origin)
            self.send_header('Access-Control-Allow-Methods', 'GET, POST')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')

