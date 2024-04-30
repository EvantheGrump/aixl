import os
import asyncio
import websockets
import subprocess
import google.generativeai as genai

async def handle_connection(websocket, path):
    while True:
        data = await websocket.recv()
        if data.startswith("FILE:"):
            # Extract the file content from the message
            file_content = data[5:]  # Remove the "FILE:" prefix
            # Save the file content to a text file
            with open("prompt.txt", "w") as file:
                file.write(file_content)
            print("File received and saved.")
        else:
            print(f"Received: {data}")

start_server = websockets.serve(handle_connection, "localhost", 8765)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
