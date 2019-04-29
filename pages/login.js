
import Layout from '../components/MyLayout'
import ArrowBack from '@material-ui/icons/ArrowBack'

const Index = () => (


    <div className="container mx-auto px-4 pt-4 flex justify-center h-screen items-center">
      <div className="w-full max-w-sm">

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <div className="mb-4">
            <a href="/">
              <ArrowBack className="text-indigo hover:text-indigo-darker w-6" style={{ fontSize: 25 }} />
            </a>
          </div>
          <div className="mb-4">

            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-primary-wolf hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-indigo hover:text-indigo-darker" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-grey text-xs">
          ©2019 Acme Corp. All rights reserved.
        </p>
      </div>


    </div>

  )


export default Index

