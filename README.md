# Front_end_Dev_Show

#Firstly the name i have given to this website is "Caristic".
#This is a prototype website for selling and buying cars.

Right now, Caristic is only having a Home Page and a About us page.It is just a Single Page Application (SPA)

#Motivation for making it:
So, Initially i had no idea what to design or which type of product should i choose.
For making my work easy,I started working in reverse....I started searching on internet for some images and actually good images.
During my search, I came around some of the Attentive or we can say Awesome pictures.

But after that i was just getting attracted to cars and all others vehicles.So, finally i decided to make website for Cars.

#Technologies or Frameworks used:--
I have used React JS for designing and some others libraries and modules like "Bootstrap and React-router-dom" for making this website working live.

If we go step by step, Firstly I made skeleton for this website or we can say a rough structure.Then started thinking of designs,pictures, managing color palettes,fonts and all.

In second step, I developed one container which must render all my pages of website. In code that container is "Layout".
    In Layout, I added a Navigation bar which is imported from "react-bootstrap".Thanks to bootstrap "An Awesome choice for designers".
    Then, linked my two pages "Home" and "About us" to the Navigation bar, so that we can navigate between the pages without rendering the     Navigation  bar again and again.
So, Here my container was almost done with a stylesheet.

Now, i started developing the components "Home" and "About us".
For "Home", i predecided that it must be having some nice fonts,colors and pictures,as it is the first page to be shown to our customers or clients.

I started developing "Home" by dividing it into two parts.
First one was to make headers which will behave like landing pages for Mobile users.
Second one was a "ThreePics" Component which i developed separately.

So finally after developing both Home and ThreePics Components, I integrated both of them and then integrated Home with Layout container.

Now, Lastly Only About us component was left, so I pushed my details on to page for placeholder text.(Trying to showcase my skills again).

At this time website was fully developed and working on my system i.e Localhost(Type Of Our One And Only Private server).

#Pushing to Github
After developing the website, I pushed it to my repository (Well You are in that repository right now) in My github account.
Used Github Cli for pushing
***After Cloning a github repo onto my system***
>Some commands in series:
'''
1. git add .
2. git commit -m"Adding all files"
3. git push origin master (Well, Right now i'm the owner)
'''
#Deployment
I have Deployed my website on Heroku as well as AWS (Amazon Web Services).

For Heroku
Used the Heroku cli
Firstly changed the git remote to the app i created on heroku using git remote -a command.
>Series of commands for Heroku-
1. git add .
2. git commit -m"Adding to Heroku"
3. git push Heroku master

For AWS-
It was simple as they have an awesome service for deploying static and dynamic website i.e AWS Amplify Service.
As, I have been working on AWS for a quite time so it is connected to my github account.
So I just had to go to the AWS and openend Amplify.
Made one instance for my webapp and started deploying it using nice GUI that they have given.Just connected the branch to my github repository and it started building,deploying and verifying on its own.
I just had to wait for it to be done.
When it was done i got link...and Hurray, the out website on AWS with an awesome rendering speed which we don't get on heroku.

Finally, My website was fully developed and live on world wide internet.


##What upgradations i would like to do in this website--
Well when i was developing this website...I was thinking of making a gallery for cars to be on sale or something.
But then another idea striked why make gallery when we can add 3d models of cars on our website.

So, this is the upgradation i will be going for, in this project.

Hope You liked my description of "How i made it,how deployment was done and What upgradations i will be doing"
Thank you for checking out this Project, If you think you can do something creative with this site..You are most welcome to contribute. 
