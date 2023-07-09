import { TextField } from '@mui/material'
import React from 'react'
import './feedbackStyle.css'
function FeedBack() {
    return (
        <>
            {/* <!-- FeedBack --> */}
            <div class="container">
                <div class="feed-back" >
                    <h3 id="feed-text">Give Us Feedback</h3>
                    <form action="">

                        <TextField id="outlined-basic" label="Name" variant="outlined" className='FeebackInput' />
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='FeebackInput' />
     
                        <TextField
                            id="outlined-multiline-static"
                            label="Feedback"
                            multiline
                            rows={4}
                            defaultValue="Your Message..."
                            className='feedbackMessage'
                        />
                        <button class="btn btn-primary my-3 " style={{ width: "11%" }} id="send_feed_btn">Send FeedBack</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default FeedBack
