# Example
https://anarinya.github.io/LS-React/

# React

Topics:

 * create-react-app
 * JSX
 * state
 * setState
 * props
 * propTypes (`npm i --save prop-types`)
 * `onClick={}`
 * map
 * functional vs class components


## Project Description

![alt tag](/assets/twitter.png)

  * Run `npm i -g create-react-app` to install the React app generator.
  * Run `create-react-app twitter` to create your starter application.
  * Create a file called `application-data.js` in `/src` and paste the JS shown below into that file.  This is the data that you will use to render your tweet and profile components.
  * Build out your application to roughly match the screenshot shown above.
  * Focus less on exact styling and more on the structure of your React components.
  * You will probably start with 5 main components in `App.js`.  (`NavBar`, `Banner`, `Profile`, `Stream`, and `RightColumn`)

  ```
  const userData = {
    name: 'LambdaSchool',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/845313033572270081/7mXto357_400x400.jpg',
    handle: '@LambdaSchool',
    location: 'San Francisco, CA',
    bio: 'On a mission to make switching careers risk-free. Money-back guarantee that you\'ll get a job',
  };

  const tweets = [
  {
      replyCount: 0,
      retweetCount: 2,
      likeCount: 2,
      date: 'Apr 17',
      text: 'LambdaSchool\'s Tuition Guarantee: Become a software engineer or your money back. lambdaschool.com/tuition-reimbursement',
    },
    {
      replyCount: 1,
      retweetCount: 2,
      likeCount: 9,
      date: 'Apr 15',
      text: 'Coming to the end of week one. Covered: Recursion, ES6, stacks, queues, hash tables, trees, graphs, sorting algorithms, complexity analysis',
    },
    {
      replyCount: 0,
      retweetCount: 3,
      likeCount: 5,
      date: 'Apr 14',
      text: 'Seats are filling up quickly for the July 2017 LambdaSchool classes. If you\'re interested, please submit an application ASAP',
    },
    {
      replyCount: 0,
      retweetCount: 1,
      likeCount: 6,
      date: 'Apr 10',
      text: 'Today is the first day of LambdaSchool part-time and full-time classes! Enjoying watching the first students strugge through code challenges',
    },
    {
      replyCount: 0,
      retweetCount: 4,
      likeCount: 5,
      date: 'Apr 7',
      text: 'Thank you LambdaSchool community; you\'ve watched our introduction to JavaScript lessons for more than 1 million minutes (almost a full year)',
    },
    {
      replyCount: 0,
      retweetCount: 4,
      likeCount: 6,
      date: 'Apr 3',
      text: 'The first 5 lessons + homework of Intro to React Mini Bootcamp are complete. The whole camp is $14.99/month https://lambdaschool.com/pro  #reactjs',
    },
    {
      replyCount: 0,
      retweetCount: 0,
      likeCount: 4,
      date: 'Mar 30',
      text: 'Congratulations to all the graduates of the JavaScript Mini Bootcamp. Next full-time and part-time classes start in a few days!',
    },
  ];

  export {
    userData,
    tweets,
  };

  ```


### Extra Credit

 * Modify the tweets so that when you click to like, retweet, or comment it increments the counter.
 * Create a popup modal that shows more detailed tweet info when you click on a tweet.
