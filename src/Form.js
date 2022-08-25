import React from 'react'

const Form = () => {
  return (
        <form className="row g-3">
            <h6>Form</h6>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </div>
        </form>
  )
}

export default Form
