import socket
import os.path
import google.generativeai as genai

filename = "google.py"

if not os.path.isfile('prompt.txt'):
	print ('Prompt file does not exist!')
else:
	with open('prompt.txt') as f:
		prompt = f.read().splitlines()

genai.configure(api_key='key')
model = genai.GenerativeModel('gemini-1.0-pro-latest')
response = model.generate_content(prompt)
print(response.text)
