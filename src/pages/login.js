import { Montserrat, Lato } from 'next/font/google'

const monsterrat = Montserrat({ weight: 'variable', subsets: ['latin'] })
const lato = Lato({ weight: '400', subsets: ['latin'] })

import LogoButton from '@latest/components/LogoButton'
import Link from 'next/link'

export default function Login(){
  return (
    <>
      <main className="h-screen">
        <div className="flex flex-row h-screen">
          <div className="basis-5/12 bg-black h-full">
            <div className={`flex ${monsterrat.className} text-white text-6xl items-center justify-center h-full font-bold`}>Board.</div>
          </div>
          <div className="flex basis-7/12 items-center justify-center bg-[#F5F5F5]">
            <div className={`${lato.className} flex flex-col w-[40%]`}>
              <div className={`${monsterrat.className} flex justify-start mt-4 font-bold text-3xl`}>
                <h2>Sign In</h2>
              </div>
              <div className='flex justify-start mt-1 font-normal text-md'>
                Sign in to your account
              </div>
              <div className={`${monsterrat.className} flex justify-around mt-5 mb-5 font-normal text-xs gap-x-8 text-[#858585]`}>
                <LogoButton svgFilename='google-logo' text='Sign in with Google'/>
                <LogoButton svgFilename='apple-logo' text='Sign in with Apple'/>
              </div>
              <div className={`flex flex-col border-[30px] border-white rounded-2xl bg-white gap-y-3`}>

                <div className={`mb-[-0.5rem]`}>
                  Email address
                </div>
                <input type="text" className='bg-[#F5F5F5] focus:bg-[#EAEAEA] rounded-lg h-9 p-3'/>

                <div className={`mb-[-0.5rem]`}>
                  Password
                </div>
                <input type="password" className={`bg-[#F5F5F5] focus:bg-[#EAEAEA] rounded-lg h-9 p-3`}/>

                <button className='text-[#346BD4] flex content-start'>
                  Forgot password?
                </button>

                <Link href="/dashboard" className={`flex justify-center ${monsterrat.className} text-white bg-black rounded-lg h-9 font-semibold content-center`}>
                  <button>
                    Sign In
                  </button>
                </Link>

              </div>
              <div className='flex justify-center mt-4 text-[#858585]'>
                Dont have an account?
                <a href="" className='text-[#346BD4]'>&nbsp;Register here</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
