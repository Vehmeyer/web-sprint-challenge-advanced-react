# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Prior to the introduction of hooks, stateful components were class components that allowed our components to have state. Functional components were used when state wasn't required. With hooks we are able to create stateful components without using classes. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

Both of these components are legacy component that the React team advises against using with new code. componentWillMount is called during mounting. componentWillUpdate is called during updating. 

3. Define stateful logic.

Stateful logic is code that is used to manipulate data, and it usually deals with component state. It helps us separate concerns by modularizing our code, keeping it DRY and reusable.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, act, and assert. During the arrange step we setup up the components we're testing. During the act step we execute behaviors and interactions. During the assert step we verify if the behavior we expected is executed. 