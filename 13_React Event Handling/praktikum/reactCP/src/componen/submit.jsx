function Submit() {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    console.log("Random Number:", randomNumber)
  }

  return (
    <div className="mt-5 mb-3">
      <button
        type="button"
        className="btn btn-primary"
        id="btn_Submit"
        style={{ textDecoration: "none", color: "white", width: "100%" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  )
}

export default Submit
