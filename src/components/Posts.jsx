import React from "react";

const Posts = ({ posts }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID#</th>
          <th scope="col">NAME</th>
          <th scope="col">TAGLINE</th>
          <th scope="col">IMAGE URL</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((ele) => (
          <tr>
            <th scope="row">{ele.id}</th>
            <td>{ele.name}</td>
            <td>{ele.tagline}</td>
            <td><a href={ele.image_url} target="_blank" style={{textDecoration:'none'}}>image</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Posts;
