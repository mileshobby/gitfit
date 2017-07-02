export const signIn = (user) =>{
  return $.ajax({
    method: 'post',
    url: '/api/session',
    data: user
  });
};
