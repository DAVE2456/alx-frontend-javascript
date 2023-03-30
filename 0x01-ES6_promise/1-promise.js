export default function (boolean) {
  return new promise((resolve, reject) => {
    const object = {
      state: 200,
      body: 'Success',
    };

    if (boolean === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
   }
 });
}
