@echo off 
start cmd /k "cd front-end && npm start"
start cmd /k "cd server && npm start"
start cmd /k "cd ai-models && python new_app.py"
start cmd /k "cd ai-models && python chatbot_app.py"
