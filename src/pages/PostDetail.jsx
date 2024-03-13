import React from 'react'
import blogPostImg from '../blogPost1.png';

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className="container post-detail-container">
        <div>
          <h1>Post title</h1>
          <div className="post-detail-thumbnail">
            <img src={blogPostImg} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus architecto! Qui ratione corrupti facilis eos, 
            recusandae ab facere adipisci et, ex commodi quia in expedita voluptas ad, quibusdam deleniti aspernatur suscipit? Ut eveniet 
            pariatur et deleniti aliquid eos assumenda deserunt. Accusamus mollitia a error officia dolores laborum suscipit nesciunt ducimus 
            at recusandae? Perspiciatis mollitia sapiente eos velit illo dolore magnam, sequi blanditiis quasi suscipit debitis sed laboriosam 
            libero vero rem tempora harum architecto expedita optio aut iusto consequatur doloribus accusamus. Quod ipsam quo rem blanditiis,
             cupiditate quia repudiandae sapiente quisquam facere iure. Enim error fugiat nostrum aperiam quasi pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus architecto! Qui ratione corrupti facilis eos, 
            recusandae ab facere adipisci et, ex commodi quia in expedita voluptas ad, quibusdam deleniti aspernatur suscipit? Ut eveniet 
            pariatur et deleniti aliquid eos assumenda deserunt. Accusamus mollitia a error officia dolores laborum suscipit nesciunt ducimus 
            at recusandae? Perspiciatis mollitia sapiente eos velit illo dolore magnam, sequi blanditiis quasi suscipit debitis sed laboriosam 
            libero vero rem tempora harum architecto expedita optio aut iusto consequatur doloribus accusamus. Quod ipsam quo rem blanditiis,
             cupiditate quia repudiandae sapiente quisquam facere iure. Enim error fugiat nostrum aperiam quasi pariatur?
          </p>
        </div>
        <p>time of post</p>
      </div>
    </section>
  )
}

export default PostDetail