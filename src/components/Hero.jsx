import React from 'react'

function Hero () {
  const urlParams = new URLSearchParams(window.location.search)
  const success = urlParams.get('success')

  return (
    <>
      <div style={{ marginTop: '30px' }}>
        <h1>The Power of WE: Connecting Women</h1>
        <h1>Entrepreneurs in South-East Asia</h1>
      </div>
      <h1 style={{ fontWeight: 700, fontSize: '2em', margin: '40px 0 40px 0', color: '#fa3c4b', textTransform: 'uppercase' }}>2pm Jan 6 2022 (GMT+7)</h1>

      <div class='btn-group' role='group' aria-label='Basic example'>
        <a href='#agenda'>
          <button
            type='button'
            class='btn btn-outline-light'
            style={{ borderRadius: 0, borderBottomLeftRadius: '0.25rem', borderTopLeftRadius: '0.25rem', marginRight: 0 }}
          >
            See The Agenda
          </button>
        </a>
        {success === true
          ? <button
            type='button'
            class='btn btn-outline-success'
            style={{ borderRadius: 0 }}
            disabled
            >
          You are signed up
          </button>

          : <>
            <a href='https://form.jotform.com/213346215659054'>
              <button
                type='button'
                class='btn btn-outline-light'
                style={{ borderRadius: 0 }}
              >
          Sign up for the event
              </button>
            </a>
          </>}

        <a href='#meetTheEntrepreneurs'>
          <button
            type='button'
            class='btn btn-outline-light'
            style={{ borderBottomRightRadius: '0.25rem', borderTopRightRadius: '0.25rem', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -1 }}
          >
              Meet The Entrepreneurs
          </button>
        </a>
      </div>

    </>
  )
}

export default Hero
