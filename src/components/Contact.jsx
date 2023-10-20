

const Contact = () => {
    return (
        <div className="bg-[#212121] py-10 flex flex-col justify-center items-center mx-auto py-10">
        <div className="form-container flex items-center justify-center">
      <form className="form ">
        <div className="form-group">
          <label for="email">Company Email</label>
          <input type="text" id="email" name="email" required="" />
        </div>
        <div className="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="" /> 
          
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    </div>
    )
}
export default Contact