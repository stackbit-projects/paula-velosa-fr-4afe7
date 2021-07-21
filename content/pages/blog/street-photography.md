---
title: Copying is the best way to learn
excerpt: >-
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra.
date: '2021-07-21'
thumb_image: /images/10.jpg
thumb_image_alt: Hello this way printed on a red metal gate
image: /images/10.jpg
image_alt: white office
seo:
  title: Understanding Street Photography
  description: >-
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Understanding Street Photography
      keyName: property
    - name: 'og:description'
      value: >-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      keyName: property
    - name: 'og:image'
      value: images/8.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Understanding Street Photography
    - name: 'twitter:description'
      value: >-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
    - name: 'twitter:image'
      value: images/8.jpg
      relativeUrl: true
layout: post
---
Ok, so I have my project idea, what do I do next?  Think about how you are going to judge it first.

When I was trying to figure out my project plan, I read the second chapter of [Building Machine Learning Powered Applications](https://www.oreilly.com/library/view/building-machine-learning/9781492045106/). Which establishes 3 steps to start your project. They were:

1.  Attempt to reproduce results from a similar open-source model. 

2.  Find a data set closer to your objectives and attempt to train the previous model on that dataset

3.  Judge how the model works using the metrics you defined and start iterating

well, metrics? This book talks about how to choose them as well. There are two kinds of metrics: project and model metrics, the first one talks about how the application tackles its main problem, and the latter is more about the ml model itself.

In my case, the metrics I chose were:

*   how many recommendations are actually clicked when they appear in the app,

*   F-score

 About the project metric, this book copes with a recommendation project as well. They define a similar metric for theirs, and I found it really useful for my project as well. Nevertheless, I'm still hesitating about it.

For my model metric. As I will use text sentiment analysis for recommending the first results, I found [here](https://www.kdnuggets.com/2018/03/5-things-sentiment-analysis-classification.html#:~:text=As%20a%20classification%20problem%2C%20Sentiment,appropriate%20metric%20should%20be%20used.) that the most used evaluation metrics in this field are Precision, Recall, F-score, and Accuracy. Since F-score resembles the mixture of both the precision and recall score, I think this is the best approach for me at the moment.

I would go on by leveraging open source code next.





