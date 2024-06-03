import tkinter
from tkinter import Image
import AI_Assistant
from tkinter import *
from AI_Assistant import *
from subprocess import call
import subprocess
from tkinter import *
from PIL import ImageTk, Image

screen = Tk()
screen.title('AI_Assistant..')
image_0= Image.open('E:\\New folder\\Ai_Assistant.jpg')
bck_end=ImageTk.PhotoImage(image_0)
screen.geometry("769x800")

lbl=Label(screen,image=bck_end)
lbl.place(x=0,y=0)
# bg = PhotoImage(file='img.jpg')
# screen.configure(image=bg)
# Label(screen,image=bg).pack

def start():
    cmd = "python AI_Assistant.py"
    p = subprocess.Popen(cmd,shell=True)
    out,err = p.communicate()
    print(err)
    print(out)

def stop():
    cmd = "python AI_Assistant.py"
    p = subprocess.Pclose(cmd,shell=True)
    out,err = p.communicate()
    print(err)
    print(out)



btn = Button(screen,bg="Green",text='Wake Up',command=start,height=2,width=10,fg='white',borderwidth=20,padx=30,pady=30).pack()
btn = Button(screen,bg="Red",text='STOP',command=stop,height=2,width=10,fg='white',borderwidth=20,padx=30,pady=30).pack()

screen.mainloop()