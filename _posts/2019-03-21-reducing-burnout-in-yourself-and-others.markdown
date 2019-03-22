---
layout: post
title:  "Reducing Risks of Burnout in Yourself and Others"
date:   2019-03-21 16:45:10 -0400
categories: jekyll update
tag:
- Burnout
- Mental Health
- Self-care
category: blog
author: jacquelinepotts
---

Working with software is stressful and weird sometimes but does it need to be? Well sometimes, yes, but there are definitely ways to protect yourself and others from late night support calls, deploys-gone-wrong, and general on-the-job stress. Remember you are going to be a software engineer for a long time, take care of your mental health for the sake of the longevity of your career and reduce the risk of mental burnout or **I will come over there and yell at you**.


# What is burnout anyway?
Burnout is not your friend.
_According to www.helpguide.org:_
> Burnout is a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress. Symptoms of burnout include but are not limited to fatigue, insomnia, impared concentration, isolation, increased illness, anxiety, and depression.

Burnout in engineers can often lead to sloppy, stressed, and buggy code with increased engineer sickness.
Engineers perform their best when they are feeling healthy and happy, let's talk about some ways to keep yourself happy and healthy at home and on the job.


---
# Ways to protect yourself on the job

## Enlist the help of friendly robots
Set up alerting and dashboards for critical user flows such as user login, user registration, payment processing, anything else that is dire functionality to your application aka it would be a literal disaster if it was borked.

<iframe src="https://giphy.com/embed/UQYtr98lNNrWw" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

These dashboards can alert you when your application exceeds a determined error threshold, when the throughput of traffic to your site increases at a certain rate, and more.

Letting robots monitor these gives us a few pros:
1. **Peace of mind** - you don't need to sit and monitor systems yourself
2. **Historical data** - did this issue happen before? I thought I fixed this, why is it back?
3. **MOAR CONTROL**

Alerting is what you make of it, but to elaborate on point #3, we have more control in the feedback cycle for production issues. Instead of having your CEO call your cell phone at 2:30am with an issue, have your robots find the issue and contact you first. Directing the issue to the correct team allows the team with the most context to debug and asses the issue as soon as possible. The engineering team can asses if this is a true emergency or just a bug that affects 2% of your user-base that can be fixed in the next sprint. Use data to determine the level of urgency an issue requires.

You will also have more control on _what_ data the alert contains - giving your team more focus and more chances for a quick recovery. This is especially helpful if your projects live across separate services.

It is really not fun for anyone to have user's calling in and reporting issues to your customer service team, user's upset and complaining on social media, or having a member of your executive team find bugs first. Reduce stress by creating an alerting system to monitor your systems and alert the proper people at the proper times.


## Recognize flaws in process and be an advocate for improvement
Not everything is your responsibility, software fails when processes fail.
If a bug in some code you wrote makes it to production, there is probably an opportunity to improve the processes used by your team.
  - Why wasn't this bug caught by your test suite?
  - Why wasn't this bug caught by code review?
  - Why wasn't this bug caught by the running of CI/CD?
  - Why wasn't this bug caught by acceptance testing on a staging environment?
  - Why wasn't this bug caught by QA testing?

Advocate for retrospectives to discuss improvements for process in a safe, nonjudgmental space.


## Ask for help 💙
Asking for help is a completely natural part of the learning process. You are not invincible and never feel ashamed for leaning on others for help.

Buy a co-worker coffee and tell them how you’re feeling and ask if they have any advice for you. Meet a friend out for lunch and tell them how you’re feeling. Find a mentor or find an executive coach or find a therapist.


## Make your workspace as gorgeous as you
Make your desk area a happy place that makes you feel good and your soul smile; you're not-so-private oasis at the office. Cover your desk with pictures of friends, loved ones, dogs, squishy toys, stress toys AND LOTS OF PLANTS!

<iframe src="https://giphy.com/embed/l0MYII7vx3jZTG3Oo" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

## Take breaks please
Don't forget to take regular breaks during your work day and try your best to separate eating meals from your computer. Developing software is such a brain intensive task, it is really easy to lose sight of your posture and physical signs of stress when you're in the zone. Taking breaks will help alleviate some of those risk factors. Breaks will also give your brain some time to digest and process what the code you were just working on.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Reminder: ‘Going for a walk’ is a pro debugging technique.</p>&mdash; Kris Jenkins (@krisajenkins) <a href="https://twitter.com/krisajenkins/status/931190678503219200?ref_src=twsrc%5Etfw">November 16, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Take a lunch break away from your desk and computer.
Take walk breaks and bring a buddy!

Use tools, like [pomodoros](https://en.wikipedia.org/wiki/Pomodoro_Technique), to keep you accountable on taking breaks and help you maintain focus.


---


# Ways to protect yourself at home

## Designated self-care days
Schedule a day during the week where you take care of yourself and wellbeing. Do some of your favorite hobbies, take a bubble bath, get outside, go on an adventure, read a book, it's up to you!

I used to get very stressed and triggered by the Sunday Scaries so I made Sunday my self-care day! It has been really helpful, now I can look forward to Sundays and just have a lovely day of horseback riding and cleaning up horse poop (it's the best!).

<iframe src="https://giphy.com/embed/nTuwEDB7lBYJy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>


## Spend some time with the love of your life
Spend time with people (or animals) whom you love most. Set up regurarly scheduled date nights with your partner, set up adventures with friends nights every Wednesday. The thing about stress is it tries to isolate you from those around you, fight that instinct.

For me, I spend Saturdays hiking with my #1, my dog Molly Dog and Fridays volunteering and the Colorado Horse Rescue. It's not weird if your favorite people are animals, right? PS, please don't tell my husband I said all these things.
<br>
<br>
<div class="toright">
  <img class="image" src="../assets/images/molly-the-dog.jpg" alt="Alt Text">
    <figcaption class="caption">The stunning Molly Dog</figcaption>
</div>
<br>


**Lean on those around you.**


## Set up some boundaries for yourself
Contrary to popular belief, software engineers are not robots. It is okay for you to set up some boundaries to give yourself time to rest and repair.

Set some goals for yourself, no slack or work email when I get home at night, no slack or email on the weekends. If you must work after work hours or on the weekend limit yourself. 'Okay, I am only going to work and think about work this Saturday from 1:30pm - 3:00pm'.


---


**TLDR;**
<br>
🚨 Reminder Alert 🚨: taking care of yourself is not selfish. If you are ever having issues with stress please please please do not keep it to yourself. Your community is here for you and we want to help.
