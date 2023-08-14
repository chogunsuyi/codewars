// DESCRIPTION
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// Note that spaces are important.


// MY SOLUTION
function formatDuration (seconds) {
  // Complete this function
  let secs, minutes, hours, days, years
  
  if(seconds === 0){
    return 'now'
  }
  
  if(seconds >= 31536000){
    years = Math.floor(seconds / 31536000)
    seconds = seconds % 31536000
  }
  if(seconds >= 86400){
    days = Math.floor(seconds / 86400)
    seconds = seconds % 86400
  }
  if(seconds >= 3600){
    hours = Math.floor(seconds / 3600)
    seconds = seconds % 3600
  }
  if(seconds >= 60){
    minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
  }
  if(seconds >= 1){
    secs = Math.floor(seconds / 1)
    seconds = seconds % 1
  }
  
  let sentence = ''
  if(years){
    let whatsLeft = [days, hours, minutes, seconds].filter(item => item != 0).length
    
    if(years > 1) {
      if(whatsLeft > 1) {
        sentence += `${years} years, `
      } else if (whatsLeft == 1) {
        sentence += `${years} years and `
      } else {
        sentence += `${years} years`
      }
      
    } else {
      if(whatsLeft > 1) {
        sentence += `${years} year, `
      } else if (whatsLeft == 1) {
        sentence += `${years} year and `
      } else {
        sentence += `${years} year`
      }
    }
    
  }
  if(days){
    let whatsLeft = [hours, minutes, seconds].filter(item => item != 0).length
    
    if(days > 1) {
      if(whatsLeft > 1) {
        sentence += `${days} days, `
      } else if (whatsLeft == 1) {
        sentence += `${days} days and `
      } else {
        sentence += `${days} days`
      }
      
    } else {
      if(whatsLeft > 1) {
        sentence += `${days} day, `
      } else if (whatsLeft == 1) {
        sentence += `${days} day and `
      } else {
        sentence += `${days} day`
      }
    }
  }
  if(hours){
    if(hours > 1) {
      if(minutes && secs) {
        sentence += `${hours} hours, `
      } else if (minutes || secs) {
        sentence += `${hours} hours and `
      } else {
        sentence += `${hours} hours`
      }
      
    } else {
      if(minutes && secs) {
        sentence += `${hours} hour, `
      } else if (minutes || secs) {
        sentence += `${hours} hour and `
      } else {
        sentence += `${hours} hour`
      }
    }
  }
  if(minutes){
    if(minutes > 1) {
      if(secs) {
        sentence += `${minutes} minutes and `
      } else {
        sentence += `${minutes} minutes`
      }
    } else {
      if(secs) {
        sentence += `${minutes} minute and `
      } else {
        sentence += `${minutes} minute`
      }
    }
  }
  if(secs){
    if(secs > 1) {
      sentence += `${secs} seconds`
    } else {
      sentence += `${secs} second`
    }
  }
  console.log(sentence)
  
  return(sentence)
  
}
