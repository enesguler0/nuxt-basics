export default function ({ store, redirect }) {
  if (!store.state.auth.user || store.state.auth.user.username !== 'mahmut') {
    return redirect('/login'); 
  
  }
}