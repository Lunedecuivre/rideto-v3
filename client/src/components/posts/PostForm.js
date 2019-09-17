import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div className="small"></div>
      <form
        className="form my-1 form-actu"
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          className="inputpost"
          name="text"
          cols="30"
          rows="5"
          placeholder="Partagez une pensée..."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <div type="submit" className="btn btn-primary">
          <i class="far fa-paper-plane"></i>
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
