function _repeatx(langs) {
  let repeats = {}

  for (const lang in langs) {
    if (Object.keys(repeats).includes(langs[lang])) {
      repeats[langs[lang]] = Number(repeats[langs[lang]]) + 1
    } else {
      repeats = { ...repeats, [langs[lang]]: 1 }
    }
  }

  return repeats
}

function _moreless(repeats) {
  let more = []
  let less = []
  let moreCount = 0
  let lessCount = Math.max(...Object.values(repeats))

  for (const repeat in repeats) {
    const current = repeats[repeat]

    //
    if (current > moreCount) {
      moreCount = current
      more = [repeat]
    }

    //
    else if (current < lessCount) {
      lessCount = current
      less = [repeat]
    }
  }

  return { more, less }
}

export function resume(array) {
  return { count: _repeatx(array), ..._moreless(_repeatx(array)) }
}
