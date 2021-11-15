import JarvisAI
import re
import pprint
import random

obj = JarvisAI.JarvisAssistant()
def t2s(text):
    obj.text2speech(text)
