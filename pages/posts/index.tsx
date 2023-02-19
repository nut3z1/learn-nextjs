import { GetStaticProps , GetStaticPropsContext } from 'next'
import React from 'react'

export interface PostsListProps {}

export default function PostsPage(props: PostsListProps) {
  return (
    <div>
      <h2>3232</h2>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostsListProps> = async (context: GetStaticPropsContext) => {

    return {
      props:{
        
      }
    }
}