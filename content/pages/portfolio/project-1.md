---
title: Podcast reviews sentiment classifier
date: '2019-05-10'
thumb_image: /images/mic-1.jpg
thumb_image_alt: 'White microphone, pink background'
image: /images/important-chili.jpg
image_alt: 'White, black, and red shoe sole'
seo:
  title: Project Title 1
  description: This is the project 1 description
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Project Title 1
      keyName: property
    - name: 'og:description'
      value: This is the project 1 description
      keyName: property
    - name: 'og:image'
      value: images/1.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Project Title 1
    - name: 'twitter:description'
      value: This is the project 1 description
    - name: 'twitter:image'
      value: images/1.jpg
      relativeUrl: true
layout: project
subtitle: Here
---
# Podcast reviews sentiment classifier

[This project](https://github.com/pvelosa/podcast-recomendation-system/) aimed to practice TF-IDF for sentiment classification in a large data set

## stages of the project

1.  finding data. [This](https://www.kaggle.com/thoughtvector/podcastreviews) is the dataset I found in Kaggle

2.  priming data. As a basic approach, I used a supervised dataset, deleted other columns I did not  want to use, and convert floats to integers

3.  I applied the TF-IDF algorithm

4.  I used Accuracy and F1-Score to measure how the model performed.

## Main takeaways

1.  SQLite is very useful for priming large quantities of data.

2.  You have to convert tags to integers ('positive' to 1, 'Negative' to 0) for the TD-IDF algorithm to function. Floats do not function either, 1.0 will not function.

3.  The gap between Positive and Negative reviews is pretty large, that's why the model has to be weighed to avoid errors.

4.  Adding another group to the classification probably will be a good idea.

