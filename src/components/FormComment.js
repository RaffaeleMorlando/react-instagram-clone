import '../css/FormComment.css';

const FormComment = () => {
  return (
    <div className="form_comments">
      <img src="assets/smile.svg" alt=""/>
      <form>
        <textarea placeholder="Add a comment..."></textarea>
        <input type="button" value="Post"/>
      </form>
    </div>
  )
}

export default FormComment
