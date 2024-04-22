import React from 'react'
import PageContainer from '../components/PageContainer'
function ReviewsPage() {
  return (
    <PageContainer>
          <div className="">
        <div className="mb-16 text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold">What our happy client say</h2>
        </div>
        <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
          <div className="bg-blue-100 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden">
          </div>
          <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_2.webp" className="w-12 h-12 rounded-full" />
              <h4 className="whitespace-nowrap font-extrabold mt-2">John Doe</h4>
              <p className="mt-1 text-xs">Founder of Rubik</p>
            </div>
            <div className="mt-4">
              <p>The service was amazing. I never had to wait that long for my food.
                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
          </div>
          <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_3.webp" className="w-12 h-12 rounded-full" />
              <h4 className="whitespace-nowrap font-extrabold mt-2">Mark Adair</h4>
              <p className="mt-1 text-xs">Founder of Alpha</p>
            </div>
            <div className="mt-4">
              <p>The service was amazing. I never had to wait that long for my food.
                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
          </div>
          <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_4.webp" className="w-12 h-12 rounded-full" />
              <h4 className="whitespace-nowrap font-extrabold mt-2">Simon Konecki</h4>
              <p className="mt-1 text-xs">Founder of Labar</p>
            </div>
            <div className="mt-4">
              <p>The service was amazing. I never had to wait that long for my food.
                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default ReviewsPage
