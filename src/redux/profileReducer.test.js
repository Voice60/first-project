import profileReducer, { addPost } from "./profileReducer";

test('new post should be added', () => {
  let action = addPost('chicha')
  let initialState = {
    posts: [
      { name: 'Пенис', likes: 16, message: 'Хай' },
      { name: 'Пенис', likes: 16, message: 'i\'m gay' },
      { name: 'Пенис', likes: 16, message: 'Привет, это Пенесита' },
      { name: 'Пенис', likes: 16, message: 'Я нигер' }
    ]
  }
  let newTest = profileReducer(initialState, action)

  expect(newTest.posts.length).toBe(5)
});