---
title: CV with React
date: '2021-09-25'
thumb_image: images/9_thumb.jpg
image: images/9.jpg
seo:
  title: The Advantages and Disadvantages of Working from Home
  description: Interdum posuere lorem ipsum dolor sit amet consectetur
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: The Advantages and Disadvantages of Working from Home
      keyName: property
    - name: 'og:description'
      value: Interdum posuere lorem ipsum dolor sit amet consectetur
      keyName: property
    - name: 'og:image'
      value: images/9.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: The Advantages and Disadvantages of Working from Home
    - name: 'twitter:description'
      value: Interdum posuere lorem ipsum dolor sit amet consectetur
    - name: 'twitter:image'
      value: images/9.jpg
      relativeUrl: true
layout: post
subtitle: ' Applying to a convocatory '
excerpt: 'I create a CV in react, These were my main takeaways'
---
# **5 lessons from building a  Curriculum Vitae  with React**

I create a CV in react, These were my main takeaways.

1.  Look at the same styled elements

2.  Use Json-server to create your fake REST API

3.  Read the documentation

4. Initialize the state before you fetch data.

5.  Personalize package.json file

This is a challenge for Platzi Master application. The goal: Make your CV in React. This was the final result

![](/images/cv-react.png)
**\*\*Tools:\*\***  - React JS   - Stylus

##    1. Look at the same styled elements 

 As some elements are repeated continuously,  (in my case, there were for example bullet points and titles). I styled them in the main App.styl file, so I can use them in every component. I know it sounds a bit dumb, but it saved me a lot of time

## \*\*  **2.** \*\*use Json-server to create your fake REST API

Create a json file with your data and install json-server, then run json-server --watch db.json et voilà.

##

## 3. Read the documentation

 Just because I didn't know how to use the server, I wasted 4 hours searching through stack overflow just to read in the challenge documentation the answer.

## &#xA;*4. Initialize the state before you fetch data.*

*

I was having trouble loading data, but I found that initializing the data I was going to use solved the problem. For example. Here I needed the name and percentage of the languages to be displayed\*

*

       * state = {*

*        data: {*

*            'languages': {*

*                 'name':  '', *

*               'percentage':  '' *

              }],        },        }

##  5. Personalize package.json file

Uploading npm run in package.json helps to create shortcuts you can use in the terminal. For example, I created another json file: db.json and later upload package.json 
    *"server": "json-server --watch db.json"*

this, helped me run my server much quicker because now i just had to type npm run server
