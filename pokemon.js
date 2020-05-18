console.log("Gotta catch 'em all'");

$(() => {
  //////////////////////////
  //////LEFT RIGHT VARS
  /////////////////////////
  let firstButton = 0;
  const buttonArray = $('.pokeButtons').children().length-1;
  //////////////////////////
  //////////RIGHT BUTTON
  /////////////////////////
  $('.next').on('click', () => {
    $('.pokeButtons').children().eq(firstButton).css('display', 'none')
    if (firstButton < buttonArray) {
      console.log("You hit the if");
      firstButton ++;
    }else {
      console.log("What the bloody 'ell do ye tink yer doing ye daft cunt'");
      firstButton = 0;
    }
    console.log("I escaped the if statement");
    $('.pokeButtons').children().eq(firstButton).css('display', 'block')
  })

  //////////////////////////
  ///////////LEFT BUTTON
  /////////////////////////

  $('.previous').on('click', () => {
    $('.pokeButtons').children().eq(firstButton).css('display', 'none')
    if(firstButton > 0){
      firstButton --;
    }else {
      firstButton = buttonArray;
    }
    $('.pokeButtons').children().eq(firstButton).css('display', 'block')

  })
  //////////////////////////
  //////BUTTON FUNCTION
  /////////////////////////
  $('.button').on('click', event => {
    event.preventDefault()
    let pokemon = $(event.target).attr('id')
    ///////////////////////
    /////API
    //////////////////////
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/'+pokemon,
    })
    .then(
      (data) => {
        $('.name').empty()
        $('.info').empty()
        console.log(data);
        //////////////////////////////
        //////NAMES
        /////////////////////////////
        console.log(data.name);
        $('.name').text(data.name)
        ////////////////////////////
        ////STATS
        ///////////////////////////
        console.log("Health is " + data.stats[5].base_stat);
        const $health = $('<div>')
        //$health.append("HP is " + data.stats[5].base_stat)
        $health.append("Health is " + data.stats[5].base_stat)
        $('.info').append($health)
        console.log("Attack is " + data.stats[4].base_stat);
        const $attack = $('<div>')
        //$attack.text("Attack is " + data.stats[4].base_stat)
        $attack.append("Attack is " + data.stats[4].base_stat)
        $('.info').append($attack)
        console.log("Defense is " + data.stats[3].base_stat);
        const $defense = $('<div>')
        $defense.append("Defense is " + data.stats[3].base_stat);
        $('.info').append($defense)
        console.log("Speed is " + data.stats[0].base_stat);
        const $speed = $('<div>')
        $speed.append("Speed is " + data.stats[0].base_stat);
        $('.info').append($speed)
        console.log("Special attack is " + data.stats[2].base_stat);
        const $sAttack = $('<div>')
        $sAttack.append("Special attack is " + data.stats[2].base_stat)
        $('.info').append($sAttack)
        console.log("Special defense is " + data.stats[1].base_stat);
        const $sDefense = $('<div>')
        $sDefense.append("Special defense is " + data.stats[1].base_stat)
        $('.info').append($sDefense)
      },
      (error) => {
        console.log("Oi, mate, ye botched ye project, ye cunt");
      }
    )

  })

})
