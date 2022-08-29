const pizza = Number(process.argv[2])

if ((pizza % 3 === 0) && (pizza % 5 === 0))
{
  console.log('JavaScript')
}

else if (pizza % 3 === 0)
{
  console.log('Java')
}

else if (pizza % 5 === 0)
{
  console.log('Script')
}

else
{
  console.log(pizza)
}