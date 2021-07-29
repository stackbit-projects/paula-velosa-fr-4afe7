---
title: An example of the importance of planning
subtitle: Planning  is definitely not underrated
excerpt: >-
  So here I was, regardless of a bunch of advice exalting the importance of
  planning and think before you act, I jumped right into coding. Bad Idea
date: '2021-07-28'
thumb_image: images/13_thumb.jpg
thumb_image_alt: Library shelves
image: images/13.jpg
image_alt: Library shelves
seo:
  title: The function of design is letting design function
  description: >-
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: The function of design is letting design function
      keyName: property
    - name: 'og:description'
      value: >-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      keyName: property
    - name: 'og:image'
      value: images/13.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: The function of design is letting design function
    - name: 'twitter:description'
      value: >-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
    - name: 'twitter:image'
      value: images/13.jpg
      relativeUrl: true
layout: post
---
So here I was, regardless of a bunch of advice exalting the importance of planning and think before you act, I jumped right into coding. Bad Idea

I  expended a big amount of time looking for a way to classify text, my main goal is to build a recommender, so why a classifier algorithm? Well, I didn't think of that at the moment, I just desperately wanted to code something, that blinded me.

I found a perfect dataset for classification: [podcast reviews](https://www.kaggle.com/thoughtvector/podcastreviews). It was pretty big, so I learned to use SQLite, which became a very useful tool I predict I'm going to use in the future for cleaning and priming data.

Then, I found [this tutorial](https://towardsdatascience.com/a-guide-to-text-classification-and-sentiment-analysis-2ab021796317) where I understood a little more about TI-IDF Vectorizer, I followed it to add it later to the podcasts reviews data frame

*   pro-tip. You need to change the datatype in the sentiment column to int64 for the classification algorithm to function.

But then, I realized how futile this code was. I'm trying to build a recommender. When the recommendation part takes place?

I decided I'm going to start differently. The most important part is the **client**, so the most intelligent approach would be to understand (in the easiest way possible)  how **they** are going to interact with the final result. That's my next task.

Even though I'm framing it as a failure, I really think I learned a lot from this experience, yet any of what I coded is going to end up in the final project :).
