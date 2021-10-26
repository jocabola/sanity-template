import React from 'react'

import {
  MdLink,
  MdGavel,
  MdFindInPage,
  MdFontDownload } from 'react-icons/md'
  
// import {
//   GrSubscript,
//   GrSuperscript
// } from "react-icons/gr"

// const supRender = props => (
//   <sup>{props.children}</sup>
// );
// const subRender = props => (
//   <sub>{props.children}</sub>
// );


export default {
  title: 'Default Content',
  name: 'defaultBlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      lists: [
        {title: 'Bullet', value: 'bullet'}
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'}, 
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          // {
          //   title: 'Subscript', value: 'sub', blockEditor: {
          //     icon: GrSubscript,
          //     render: subRender
          //   }
          // },
          // {title: 'Superscript', value: 'sup', blockEditor: {
          //   icon: GrSuperscript,
          //   render: supRender
          // }},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        // annotations: [
        //   {
        //     title: 'URL',
        //     name: 'link',
        //     type: 'object',
        //     blockEditor: {
        //       icon: MdLink,
        //     },
        //     fields: [
        //       {
        //         title: 'URL',
        //         name: 'href',
        //         type: 'url',
        //         validation: Rule => Rule.uri({allowRelative: true, scheme: ['https', 'http', 'mailto', 'tel']})
        //       }
        //     ],
        //   },
          // {
          //   name: 'pageInternalLink',
          //   type: 'object',
          //   title: 'Page link',
          //   blockEditor: {
          //     icon: MdFindInPage
          //   },
          //   fields: [
          //     {
          //       name: 'reference',
          //       type: 'reference',
          //       title: 'Reference',
          //       to: [
          //         { type: 'frontpage' },
          //         { type: 'solutions' },
          //         { type: 'research' },
          //         { type: 'about' },
          //         { type: 'contact' },
          //         { type: 'productsPage' },
          //         { type: 'blogPage' },
          //       ]
          //     }
          //   ]
          // },
          // {
          //   name: 'postInternalLink',
          //   type: 'object',
          //   title: 'Posts link',
          //   fields: [
          //     {
          //       name: 'reference',
          //       type: 'reference',
          //       title: 'Reference',
          //       to: [
          //         { type: 'blogPost' },
          //       ]
          //     }
          //   ]
          // },
          // {
          //   name: 'internalLink',
          //   type: 'object',
          //   title: 'Legal Page link',
          //   blockEditor: {
          //     icon: MdGavel
          //   },
          //   fields: [
          //     {
          //       name: 'reference',
          //       type: 'reference',
          //       title: 'Reference',
          //       to: [
          //         { type: 'legal' },
          //       ]
          //     }
          //   ]
          // },
        // ]
      }
    }
  ]
}
