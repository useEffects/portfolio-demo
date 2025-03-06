{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.python3
    pkgs.python3Packages.pip
  ];

  shellHook = ''
    if [ ! -d ".venv" ]; then
      python -m venv .venv
      source .venv/bin/activate
      pip install --upgrade pip
      pip install python-aiml
    else
      source .venv/bin/activate
    fi
  '';
}
