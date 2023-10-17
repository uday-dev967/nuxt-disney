// middleware/authRedirect.js
export default function ({ route, redirect }) {
  if (process.client) {
    const isAuthenticated = localStorage.getItem('authToken')
    // eslint-disable-next-line no-console
    console.log(isAuthenticated)
    if (isAuthenticated !== null) {
      // Redirect logged-in users to the home page
      return redirect('/')
    } else if (route.path !== '/login') {
      return redirect('/login')
    }
  }
}
