let blogs = [] ; 

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]



    function addBlog(event){
    event.preventDefault()   ;/*biar tampilan tidak ke reload*/

    let title = document.getElementById('input-blog-title').value ;
    let content = document.getElementById('input-blog-content').value ;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let jutsu = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value);
    
    let image = document.getElementById('input-blog-image') ; 
    image = URL.createObjectURL(image.files[0])  ; 
    let blog = {
        author: 'Sopian',
        title,
        content,
        startDate,
        endDate,
        jutsu,    
        image,
        postedAt: new Date()  
        } ; 
    // console.log(blog);    
    blogs.push(blog) ; //untuk add si content dibarisan terakhir index array
    renderBlog() ; 
}

function renderBlog () {
    let lenghtData = blogs.length ;  
    // console.log(lengthData)
    let blogContainer = document.getElementById('contents');
    blogContainer.innerHTML = firstContent() ;

       //looping 
       for (let i = 0; i < lenghtData; i++) {
          //  if (i+1 == lenghtData) { 
            let icons = blogs[i].jutsu.map(item => `<img src="assets/${item}">`)

               blogContainer.innerHTML += `
               <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="${blogs[i].image}" alt="" />
                    </div>
                  <div class="blog-content">
                        <p><a href="blog-detail.html" target="_blank"><p>${blogs[i].title}</p></a><p>
                          <div class="detail-blog-content">                             
                          ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
                          </div>                          
                          <p>${blogs[i].content}</p><p class="blog-app">`+ icons + `</p>                         
                          <div class="duration">
                          <div style="text-align: right;">
                          <span style="color: grey; font-size: 15px;">
                          ${getDistanceTime(blogs[i].postedAt)}
                          </div> 
                          <div class="btn-group">
                            <button class="btn-edit">Edit Post</button>
                            <button class="btn-delete">Delete Post</button>
                          </div>
                          Duration : ${getDayDifference(blogs[i].startDate, blogs[i].endDate)}
                          </div> 
                            </span>
                          </div>
                      </div>
                   </div>
                    `
          //  }
       } ; 
}

function getFullTime(time) {

  const date = time.getDate()
  const monthIndex= time.getMonth()
  const year = time.getFullYear()
  
  const hours = time.getHours()
  const monthFull= month[monthIndex]
  const minutes = time.getMinutes()  

  return `${date} ${monthFull} ${year} ${hours}:${minutes} WIB`
}


function getDistanceTime(time){
  const distance = new Date() - new Date (time) // Jam sekarang- jam postingan

  //convert to day//
  const miliseconds = 1000
  const secondInMinutes = 60
  const minutesInHour = 60
  const secondInHour = secondInMinutes * minutesInHour
  const hourInDay = 23

  let dayDistance = distance / (miliseconds * secondInHour * hourInDay) //nyari satu hari berapa detik yang dalam kurung

  // dayDistance = 8.6

  if(dayDistance >= 1){
    const time = Math.floor (dayDistance) + ` a day ago` //mathFlorr(pembulatan kebawah)
    console.log("time " + time);
    return time
  } else {
  // Convert to hour
  let hourDistance = Math.floor ( distance / (miliseconds * secondInHour))
//hourDistance = 0.1
  if (hourDistance > 0 ) {
    return hourDistance + ' hour ago'    
    } else {
      //convert to minute
      const minutestDistance = Math.floor (distance / (miliseconds * secondInMinutes))
      return minutestDistance + ' minute ago'
    }
  }
}

function getDayDifference (startDate,endDate) {
  const date1 = new Date (startDate)
  const date2 = new Date (endDate)

  const diffTime = Math.abs(date2 - date1);

  const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDay <30){
       return diffDay +` days `
    } else {
      let diffMonths = Math.ceil (diffTime / (1000 * 60 * 60 * 24 * 30));
          if (diffMonths >=1) {
            return diffMonths +` month `
          }
    }


}

// console.log (dayDistance)
// console.log (dayDiffence)

setInterval(function () {
  renderBlog()
  },2000)

function firstContent() { 
    return`

    <div class="blog-list-item">
          <div class="blog-image" width="100px;"><img src="assets/blog-img.png" alt="" width="100%" /></div>
          <div class="blog-content">
                <p><a href="blog-detail.html" target="_blank"><p>Pasar Coding di Indonesia Dinilai Masih Menjanjikan</p></a>
                <p><div class="detail-blog-content">12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah</div>
                <p>Ketimpangan sumber daya manusia (SDM) di sektor digital masihmenjadi isu yang belum terpecahkan.</p>
              <div class="blog-app">
                <img src="assets/nodejs.jpeg" alt="" />
                <img src="assets/reactjs.jpeg" alt="" />
                <img src="assets/nextjs.png" alt="" />
                <img src="assets/typescript.png" alt="" />
              </div>
              <div style="text-align: right;"><span style="color: grey; font-size: 15px;">1 hours ago</span></div>
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-delete">Delete Post</button>
              </div>
            </div>
        </div>


        `
}

//tugas day 6 membuat tampilan,dan cari selisih antara starDdate and end date



