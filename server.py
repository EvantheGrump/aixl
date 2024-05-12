import os
import asyncio
import websockets
import subprocess
import http.server
import socketserver
import google.generativeai as genai

genai.configure(api_key='key')
model = genai.GenerativeModel('gemini-1.0-pro-latest')
global num

async def handle_connection(websocket, path):
    while True:
        global num
        data = await websocket.recv()
        if data.startswith("FILE:"):
            # Extract the file content from the message
            file_content = data[5:]  # Remove the "FILE:" prefix
            # Save the file content to a text file
            with open(f"prompt{num}.txt", "w") as file:
                file.write(file_content)
            with open(f'prompt{num}.txt') as f:
                prompt = f.read().splitlines()
            os.chmod(f"prompt{num}.txt", 777)
            response = model.generate_content(prompt)
            # print(response.text)
            os.remove(f"prompt{num}.txt")
            num = 0
            await websocket.send(response.text)
        else:
            # print(f"New num: {data}")
            num = data

start_server = websockets.serve(handle_connection, "localhost", 8765)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
