const number_10 = 3214





const convertTo_2 = function (number) {

  const arr = []

  let level2 = Math.trunc(Math.log2(number))

  let ostatok = number - 2 ** level2

  arr[level2] = 1


  while (ostatok > 1) {

    level2 = Math.trunc(Math.log2(ostatok))

    arr[level2] = 1

    ostatok = ostatok - 2 ** level2

  }



  if (ostatok === 1) {
    arr[0] = 1
  } else if (ostatok === 0) {
    arr[0] = 0
  }


  const finalArr = []

  for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i]) {
      finalArr.push(1)
    } else {
      finalArr.push(0)
    }

  }

  console.log(finalArr.join(' '));

}



convertTo_2(number_10)