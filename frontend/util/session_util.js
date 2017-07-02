export const signIn = (user) =>{
  return $.ajax({
    method: 'post',
    url: '/api/users',
    data: user
  });
};
