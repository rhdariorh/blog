import http.server
import socketserver

SERVER = '0.0.0.0'
PORT = 9914

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print('Web Server listening on http://',SERVER,':',PORT,'.........(stop with ctrl+c)...')
    httpd.serve_forever()