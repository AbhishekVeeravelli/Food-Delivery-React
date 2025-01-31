# Learning React from Scratch and building a project from scratch

# Food Ordering App

- Header
- - Logo
- - Nav-items
- Body
- -Search
- -RestrauntCard
- -Img
- Name of Res,Start Rating,cuisine, delivery time;
- Footer
- -Copyright
- -Links
- - Address
- - Contact

# Description about React

# Parcel

1. Dev build
2. Local Server
3. Automatically refreshing the page=>HMR(Hard Module Replacement)
4. Parcel uses the file watching algorithm and written in c++
5. Caching-Faster builds
6. Image optimization
7. Minification of file
8. Bundling
9. Compress the files
10. Consistent hashing
11. Code splitting
12. Differential bundling-It makes app run smoothly in th older browsers as well
13. Diagnostics behind the scene
14. Error Handling
15. Helps in host the website in https
16. Tree Shaking algorithm- Removes unused code for you
17. Different bundlers for dev and prod

Read parcel documentation for more info

--> In react there are two types of export and import

--> 1st type is default export/import

export default Component
import component from "path"

-->2nd type is named export/import

export const Component;
import {Component} from "path"

#React Hooks
It is a normal JS function which is a utility function which give you the utilities

They are normal JS functions

1.  UseState()-- This is used to generate super powerful state to react variables
2.  UseEffect()-- UseEffect is used after every render of that component

Using dependency array is not mandatory. But when we call the useEffect without a dependency array it renders everytime the component is rendered

- If dependency array is empty = []=>useEffect is called on initial render(just once)
- If we put something in the dependency array it will be only called when the dependency changes
- If dependency array is [btnNameReact] then useEffect is called everytime btnNameReact is updated
- Router provider provides the routing configuration to the app
- To identify a hook the common convention in the industry is to find for "use"
- React is a single page application.The reason behind this is it follows Client Side Routing. In Client Side Routing whenever the home page is loaded it gets the code for all the other pages and when we switch the tabs aas the applications is already loaded it display the pages without delay/latency.
- There are two types of routing in any web application
  1. Client Side Routing
  2. Server Side Routing:

React lifecycle if there is only one component

- Parent Constructor
- Parent Render

- Child1 Constructor
- Child1 Render
- Child1 ComponenDidMount

- Parent ComponentDidMount

React lifecycle if there are two components

- Parent Constructor
- Parent Render

------Render Phase---------

- Child1 Constructor
- Child1 Render

- Child2 Constructor
- Child2 Render

------------Commit Phase-----------------

- Child1 ComponenDidMount
- Child2 ComponenDidMount

- Parent ComponentDidMount

- The reason behind the React is batching up the commit phase when having more than two children is to optimize the execution. This is because when commit phase starts React updates the DOM and we know that DOM manipulation is the expensive thing in updating the component.

-----MOUNTING--------

- Constructor(dummy)
- Render(dummy)
  - <HTML dummy>
- ComponentDidMount
  - API call
  - this.setState (state variable is updated)

--------Update Cycle---------

- render(API data)
  - HTML is loaded with API data
- ComponentDidiUpdate
