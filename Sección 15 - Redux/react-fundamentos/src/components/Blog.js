import React from 'react'
import { connect } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { fetchPosts } from '../redux/actions/postsActions'

const Blog = (props) => {
    console.log(props)

    const click = () => {
        props.dispatch(
        fetchPosts()
        )
    }

    return (
        <div>
            <h1>Nuevas entradas de blog</h1>
            <button onClick={click}>
                Cargar Posts
            </button>
                {props.blog.isFetching
                    ? <SyncLoader />
                    : (
                        <ul>
                            {props.blog.posts.map(post => (
                                <li key={post.id}>
                                    { post.title }
                                </li>
                            ))}
                        </ul>
                    )
                }
        </div>
    )
}

export default connect((state) => {
    return state
})(Blog)