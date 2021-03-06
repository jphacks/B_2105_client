import firebase from 'firebase/compat/app'
import type { NextPage } from 'next'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'

import { githubProvider, googleProvider } from '../components/auth/AuthMethods'
import socialMediaAuth from '../components/auth/SocialMediaAuth'
import { GithubIcon } from '../components/icon/GithubIcon'
import { GoogleIcon } from '../components/icon/GoogleIcon'
import { Button } from '../components/shared/Button'

const Signup: NextPage = () => {
  const auth = firebase.auth()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && Router.push('/dashboard')
    })
  }, [])

  const handleOnClick = async provider => {
    await socialMediaAuth(provider)
  }

  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          {/* いい感じの画像置く */}
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          {/* 入会方法側・ログイン */}
          <div className="flex flex-col  my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl font-bold mt-28">登録方法</p>
            <div className="flex flex-row">
              <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center mt-10">
                <p className="text-xl text-white">1</p>
              </div>
              <div className="flex-col">
                <p className="text-xl ml-6 mt-10">下記よりアカウント作成</p>
                <p className="text-xs ml-6 mt-2">
                  GitHubかGoogle連携が必要です
                </p>
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center mt-10">
                <p className="text-xl text-white">2</p>
              </div>
              <div className="flex-col">
                <p className="text-xl ml-6 mt-10">プロフィールの記入</p>
                <p className="text-xs ml-6 mt-2">
                  あとで変更することも可能です
                </p>
              </div>
            </div>
            <Button
              variant="solid-black"
              className="py-4 w-72 sm:w-80 mt-7"
              onClick={() => {
                handleOnClick(githubProvider)
              }}
            >
              <div className="flex">
                <GithubIcon iconColor="white" className="mr-3" />
                <span>Sign up with Github</span>
              </div>
            </Button>
            <Button
              variant="solid-white"
              className="py-4 w-72 sm:w-80 mt-5"
              onClick={() => {
                handleOnClick(googleProvider)
              }}
            >
              <div className="flex">
                <GoogleIcon className="mr-3" />
                <span>Sign up with Google</span>
              </div>
            </Button>
            {/* <LoginWidget /> メールアドレス登録する場合に使います */}
            <div className=" pt-6 pb-12">
              <p className="text-sm">
                既にアカウントをお持ちですか？{' '}
                <Link href="/signin">
                  <a className="text-blue-400">サインイン</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup
