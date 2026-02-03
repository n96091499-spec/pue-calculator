// ============ 氣象數據 - 從 Excel 讀取 ============
// 由北到南排序
const WEATHER_DATA = {

    tamsui: {
        wet: [
            { temp: 5, hours: 33 },
            { temp: 6, hours: 23 },
            { temp: 7, hours: 57 },
            { temp: 8, hours: 163 },
            { temp: 9, hours: 175 },
            { temp: 10, hours: 192 },
            { temp: 11, hours: 230 },
            { temp: 12, hours: 343 },
            { temp: 13, hours: 303 },
            { temp: 14, hours: 370 },
            { temp: 15, hours: 391 },
            { temp: 16, hours: 405 },
            { temp: 17, hours: 400 },
            { temp: 18, hours: 392 },
            { temp: 19, hours: 369 },
            { temp: 20, hours: 302 },
            { temp: 21, hours: 425 },
            { temp: 22, hours: 410 },
            { temp: 23, hours: 478 },
            { temp: 24, hours: 1017 },
            { temp: 25, hours: 1039 },
            { temp: 26, hours: 832 },
            { temp: 27, hours: 347 },
            { temp: 28, hours: 64 },
        ],
        dry: [
            { temp: 6, hours: 1 },
            { temp: 7, hours: 12 },
            { temp: 8, hours: 14 },
            { temp: 9, hours: 51 },
            { temp: 10, hours: 72 },
            { temp: 11, hours: 140 },
            { temp: 12, hours: 204 },
            { temp: 13, hours: 256 },
            { temp: 14, hours: 264 },
            { temp: 15, hours: 345 },
            { temp: 16, hours: 387 },
            { temp: 17, hours: 357 },
            { temp: 18, hours: 338 },
            { temp: 19, hours: 471 },
            { temp: 20, hours: 443 },
            { temp: 21, hours: 382 },
            { temp: 22, hours: 407 },
            { temp: 23, hours: 342 },
            { temp: 24, hours: 292 },
            { temp: 25, hours: 383 },
            { temp: 26, hours: 539 },
            { temp: 27, hours: 599 },
            { temp: 28, hours: 602 },
            { temp: 29, hours: 696 },
            { temp: 30, hours: 384 },
            { temp: 31, hours: 304 },
            { temp: 32, hours: 224 },
            { temp: 33, hours: 134 },
            { temp: 34, hours: 63 },
            { temp: 35, hours: 44 },
            { temp: 36, hours: 9 },
            { temp: 37, hours: 1 },
        ]
    },

    taipei: {
        wet: [
            { temp: 5, hours: 1 },
            { temp: 6, hours: 26 },
            { temp: 7, hours: 40 },
            { temp: 8, hours: 101 },
            { temp: 9, hours: 193 },
            { temp: 10, hours: 194 },
            { temp: 11, hours: 212 },
            { temp: 12, hours: 257 },
            { temp: 13, hours: 389 },
            { temp: 14, hours: 354 },
            { temp: 15, hours: 351 },
            { temp: 16, hours: 416 },
            { temp: 17, hours: 402 },
            { temp: 18, hours: 415 },
            { temp: 19, hours: 351 },
            { temp: 20, hours: 369 },
            { temp: 21, hours: 384 },
            { temp: 22, hours: 475 },
            { temp: 23, hours: 385 },
            { temp: 24, hours: 889 },
            { temp: 25, hours: 1302 },
            { temp: 26, hours: 951 },
            { temp: 27, hours: 276 },
            { temp: 28, hours: 26 },
            { temp: 29, hours: 1 },
        ],
        dry: [
            { temp: 8, hours: 4 },
            { temp: 9, hours: 10 },
            { temp: 10, hours: 42 },
            { temp: 11, hours: 51 },
            { temp: 12, hours: 156 },
            { temp: 13, hours: 224 },
            { temp: 14, hours: 301 },
            { temp: 15, hours: 316 },
            { temp: 16, hours: 320 },
            { temp: 17, hours: 339 },
            { temp: 18, hours: 349 },
            { temp: 19, hours: 434 },
            { temp: 20, hours: 427 },
            { temp: 21, hours: 380 },
            { temp: 22, hours: 401 },
            { temp: 23, hours: 394 },
            { temp: 24, hours: 367 },
            { temp: 25, hours: 344 },
            { temp: 26, hours: 400 },
            { temp: 27, hours: 602 },
            { temp: 28, hours: 604 },
            { temp: 29, hours: 653 },
            { temp: 30, hours: 489 },
            { temp: 31, hours: 345 },
            { temp: 32, hours: 293 },
            { temp: 33, hours: 274 },
            { temp: 34, hours: 173 },
            { temp: 35, hours: 62 },
            { temp: 36, hours: 6 },
        ]
    },

    keelung: {
        wet: [
            { temp: 5, hours: 2 },
            { temp: 6, hours: 19 },
            { temp: 7, hours: 53 },
            { temp: 8, hours: 115 },
            { temp: 9, hours: 205 },
            { temp: 10, hours: 209 },
            { temp: 11, hours: 187 },
            { temp: 12, hours: 280 },
            { temp: 13, hours: 408 },
            { temp: 14, hours: 331 },
            { temp: 15, hours: 323 },
            { temp: 16, hours: 449 },
            { temp: 17, hours: 414 },
            { temp: 18, hours: 428 },
            { temp: 19, hours: 417 },
            { temp: 20, hours: 334 },
            { temp: 21, hours: 340 },
            { temp: 22, hours: 466 },
            { temp: 23, hours: 327 },
            { temp: 24, hours: 794 },
            { temp: 25, hours: 1411 },
            { temp: 26, hours: 1096 },
            { temp: 27, hours: 150 },
            { temp: 28, hours: 2 },
        ],
        dry: [
            { temp: 9, hours: 8 },
            { temp: 10, hours: 38 },
            { temp: 11, hours: 76 },
            { temp: 12, hours: 151 },
            { temp: 13, hours: 224 },
            { temp: 14, hours: 350 },
            { temp: 15, hours: 368 },
            { temp: 16, hours: 354 },
            { temp: 17, hours: 396 },
            { temp: 18, hours: 371 },
            { temp: 19, hours: 384 },
            { temp: 20, hours: 493 },
            { temp: 21, hours: 364 },
            { temp: 22, hours: 358 },
            { temp: 23, hours: 436 },
            { temp: 24, hours: 399 },
            { temp: 25, hours: 337 },
            { temp: 26, hours: 398 },
            { temp: 27, hours: 662 },
            { temp: 28, hours: 784 },
            { temp: 29, hours: 718 },
            { temp: 30, hours: 509 },
            { temp: 31, hours: 303 },
            { temp: 32, hours: 164 },
            { temp: 33, hours: 91 },
            { temp: 34, hours: 22 },
            { temp: 35, hours: 2 },
        ]
    },

    yilan: {
        wet: [
            { temp: 5, hours: 4 },
            { temp: 6, hours: 19 },
            { temp: 7, hours: 39 },
            { temp: 8, hours: 51 },
            { temp: 9, hours: 152 },
            { temp: 10, hours: 190 },
            { temp: 11, hours: 222 },
            { temp: 12, hours: 223 },
            { temp: 13, hours: 305 },
            { temp: 14, hours: 425 },
            { temp: 15, hours: 342 },
            { temp: 16, hours: 359 },
            { temp: 17, hours: 429 },
            { temp: 18, hours: 398 },
            { temp: 19, hours: 366 },
            { temp: 20, hours: 420 },
            { temp: 21, hours: 377 },
            { temp: 22, hours: 447 },
            { temp: 23, hours: 500 },
            { temp: 24, hours: 725 },
            { temp: 25, hours: 1060 },
            { temp: 26, hours: 1004 },
            { temp: 27, hours: 612 },
            { temp: 28, hours: 89 },
            { temp: 29, hours: 2 },
        ],
        dry: [
            { temp: 8, hours: 8 },
            { temp: 9, hours: 23 },
            { temp: 10, hours: 45 },
            { temp: 11, hours: 98 },
            { temp: 12, hours: 194 },
            { temp: 13, hours: 205 },
            { temp: 14, hours: 303 },
            { temp: 15, hours: 332 },
            { temp: 16, hours: 352 },
            { temp: 17, hours: 420 },
            { temp: 18, hours: 429 },
            { temp: 19, hours: 387 },
            { temp: 20, hours: 420 },
            { temp: 21, hours: 389 },
            { temp: 22, hours: 398 },
            { temp: 23, hours: 397 },
            { temp: 24, hours: 397 },
            { temp: 25, hours: 660 },
            { temp: 26, hours: 794 },
            { temp: 27, hours: 595 },
            { temp: 28, hours: 491 },
            { temp: 29, hours: 409 },
            { temp: 30, hours: 374 },
            { temp: 31, hours: 389 },
            { temp: 32, hours: 211 },
            { temp: 33, hours: 39 },
            { temp: 34, hours: 1 },
        ]
    },

    newtaipei: {
        wet: [
            { temp: 5, hours: 8 },
            { temp: 6, hours: 37 },
            { temp: 7, hours: 35 },
            { temp: 8, hours: 84 },
            { temp: 9, hours: 201 },
            { temp: 10, hours: 208 },
            { temp: 11, hours: 204 },
            { temp: 12, hours: 301 },
            { temp: 13, hours: 396 },
            { temp: 14, hours: 416 },
            { temp: 15, hours: 366 },
            { temp: 16, hours: 392 },
            { temp: 17, hours: 409 },
            { temp: 18, hours: 419 },
            { temp: 19, hours: 369 },
            { temp: 20, hours: 311 },
            { temp: 21, hours: 519 },
            { temp: 22, hours: 467 },
            { temp: 23, hours: 696 },
            { temp: 24, hours: 1056 },
            { temp: 25, hours: 851 },
            { temp: 26, hours: 675 },
            { temp: 27, hours: 315 },
            { temp: 28, hours: 25 },
        ],
        dry: [
            { temp: 7, hours: 5 },
            { temp: 8, hours: 22 },
            { temp: 9, hours: 48 },
            { temp: 10, hours: 92 },
            { temp: 11, hours: 154 },
            { temp: 12, hours: 191 },
            { temp: 13, hours: 239 },
            { temp: 14, hours: 312 },
            { temp: 15, hours: 368 },
            { temp: 16, hours: 346 },
            { temp: 17, hours: 374 },
            { temp: 18, hours: 391 },
            { temp: 19, hours: 440 },
            { temp: 20, hours: 419 },
            { temp: 21, hours: 355 },
            { temp: 22, hours: 422 },
            { temp: 23, hours: 389 },
            { temp: 24, hours: 465 },
            { temp: 25, hours: 684 },
            { temp: 26, hours: 633 },
            { temp: 27, hours: 513 },
            { temp: 28, hours: 433 },
            { temp: 29, hours: 326 },
            { temp: 30, hours: 234 },
            { temp: 31, hours: 248 },
            { temp: 32, hours: 241 },
            { temp: 33, hours: 252 },
            { temp: 34, hours: 136 },
            { temp: 35, hours: 26 },
            { temp: 36, hours: 2 },
        ]
    },

    hsinchu: {
        wet: [
            { temp: 5, hours: 10 },
            { temp: 6, hours: 43 },
            { temp: 7, hours: 59 },
            { temp: 8, hours: 139 },
            { temp: 9, hours: 190 },
            { temp: 10, hours: 174 },
            { temp: 11, hours: 248 },
            { temp: 12, hours: 318 },
            { temp: 13, hours: 318 },
            { temp: 14, hours: 415 },
            { temp: 15, hours: 396 },
            { temp: 16, hours: 373 },
            { temp: 17, hours: 358 },
            { temp: 18, hours: 374 },
            { temp: 19, hours: 343 },
            { temp: 20, hours: 359 },
            { temp: 21, hours: 412 },
            { temp: 22, hours: 409 },
            { temp: 23, hours: 511 },
            { temp: 24, hours: 851 },
            { temp: 25, hours: 1071 },
            { temp: 26, hours: 1038 },
            { temp: 27, hours: 333 },
            { temp: 28, hours: 18 },
        ],
        dry: [
            { temp: 8, hours: 3 },
            { temp: 9, hours: 11 },
            { temp: 10, hours: 64 },
            { temp: 11, hours: 85 },
            { temp: 12, hours: 215 },
            { temp: 13, hours: 231 },
            { temp: 14, hours: 291 },
            { temp: 15, hours: 351 },
            { temp: 16, hours: 402 },
            { temp: 17, hours: 337 },
            { temp: 18, hours: 318 },
            { temp: 19, hours: 387 },
            { temp: 20, hours: 346 },
            { temp: 21, hours: 399 },
            { temp: 22, hours: 420 },
            { temp: 23, hours: 372 },
            { temp: 24, hours: 398 },
            { temp: 25, hours: 393 },
            { temp: 26, hours: 521 },
            { temp: 27, hours: 619 },
            { temp: 28, hours: 618 },
            { temp: 29, hours: 547 },
            { temp: 30, hours: 489 },
            { temp: 31, hours: 386 },
            { temp: 32, hours: 347 },
            { temp: 33, hours: 153 },
            { temp: 34, hours: 40 },
            { temp: 35, hours: 17 },
        ]
    },

    xinwu: {
        wet: [
            { temp: 5, hours: 12 },
            { temp: 6, hours: 34 },
            { temp: 7, hours: 63 },
            { temp: 8, hours: 170 },
            { temp: 9, hours: 177 },
            { temp: 10, hours: 182 },
            { temp: 11, hours: 240 },
            { temp: 12, hours: 301 },
            { temp: 13, hours: 345 },
            { temp: 14, hours: 450 },
            { temp: 15, hours: 407 },
            { temp: 16, hours: 328 },
            { temp: 17, hours: 308 },
            { temp: 18, hours: 348 },
            { temp: 19, hours: 371 },
            { temp: 20, hours: 339 },
            { temp: 21, hours: 373 },
            { temp: 22, hours: 436 },
            { temp: 23, hours: 407 },
            { temp: 24, hours: 765 },
            { temp: 25, hours: 1021 },
            { temp: 26, hours: 1138 },
            { temp: 27, hours: 521 },
            { temp: 28, hours: 23 },
            { temp: 29, hours: 1 },
        ],
        dry: [
            { temp: 8, hours: 3 },
            { temp: 9, hours: 25 },
            { temp: 10, hours: 50 },
            { temp: 11, hours: 100 },
            { temp: 12, hours: 208 },
            { temp: 13, hours: 277 },
            { temp: 14, hours: 332 },
            { temp: 15, hours: 417 },
            { temp: 16, hours: 394 },
            { temp: 17, hours: 332 },
            { temp: 18, hours: 314 },
            { temp: 19, hours: 372 },
            { temp: 20, hours: 428 },
            { temp: 21, hours: 387 },
            { temp: 22, hours: 395 },
            { temp: 23, hours: 381 },
            { temp: 24, hours: 371 },
            { temp: 25, hours: 366 },
            { temp: 26, hours: 561 },
            { temp: 27, hours: 663 },
            { temp: 28, hours: 724 },
            { temp: 29, hours: 616 },
            { temp: 30, hours: 500 },
            { temp: 31, hours: 383 },
            { temp: 32, hours: 98 },
            { temp: 33, hours: 37 },
            { temp: 34, hours: 19 },
            { temp: 35, hours: 7 },
        ]
    },

    taichung: {
        wet: [
            { temp: 4, hours: 7 },
            { temp: 5, hours: 2 },
            { temp: 6, hours: 5 },
            { temp: 7, hours: 41 },
            { temp: 8, hours: 65 },
            { temp: 9, hours: 131 },
            { temp: 10, hours: 172 },
            { temp: 11, hours: 172 },
            { temp: 12, hours: 256 },
            { temp: 13, hours: 388 },
            { temp: 14, hours: 393 },
            { temp: 15, hours: 463 },
            { temp: 16, hours: 376 },
            { temp: 17, hours: 298 },
            { temp: 18, hours: 332 },
            { temp: 19, hours: 375 },
            { temp: 20, hours: 344 },
            { temp: 21, hours: 411 },
            { temp: 22, hours: 468 },
            { temp: 23, hours: 607 },
            { temp: 24, hours: 1137 },
            { temp: 25, hours: 1280 },
            { temp: 26, hours: 793 },
            { temp: 27, hours: 231 },
            { temp: 28, hours: 13 },
        ],
        dry: [
            { temp: 8, hours: 2 },
            { temp: 9, hours: 11 },
            { temp: 10, hours: 28 },
            { temp: 11, hours: 60 },
            { temp: 12, hours: 149 },
            { temp: 13, hours: 121 },
            { temp: 14, hours: 226 },
            { temp: 15, hours: 300 },
            { temp: 16, hours: 386 },
            { temp: 17, hours: 368 },
            { temp: 18, hours: 328 },
            { temp: 19, hours: 302 },
            { temp: 20, hours: 293 },
            { temp: 21, hours: 329 },
            { temp: 22, hours: 375 },
            { temp: 23, hours: 363 },
            { temp: 24, hours: 557 },
            { temp: 25, hours: 648 },
            { temp: 26, hours: 711 },
            { temp: 27, hours: 695 },
            { temp: 28, hours: 697 },
            { temp: 29, hours: 540 },
            { temp: 30, hours: 391 },
            { temp: 31, hours: 406 },
            { temp: 32, hours: 335 },
            { temp: 33, hours: 122 },
            { temp: 34, hours: 16 },
            { temp: 35, hours: 1 },
        ]
    },

    chiayi: {
        wet: [
            { temp: 5, hours: 4 },
            { temp: 6, hours: 11 },
            { temp: 7, hours: 18 },
            { temp: 8, hours: 43 },
            { temp: 9, hours: 94 },
            { temp: 10, hours: 123 },
            { temp: 11, hours: 134 },
            { temp: 12, hours: 159 },
            { temp: 13, hours: 270 },
            { temp: 14, hours: 380 },
            { temp: 15, hours: 482 },
            { temp: 16, hours: 418 },
            { temp: 17, hours: 318 },
            { temp: 18, hours: 310 },
            { temp: 19, hours: 335 },
            { temp: 20, hours: 381 },
            { temp: 21, hours: 327 },
            { temp: 22, hours: 396 },
            { temp: 23, hours: 573 },
            { temp: 24, hours: 849 },
            { temp: 25, hours: 1294 },
            { temp: 26, hours: 1232 },
            { temp: 27, hours: 458 },
            { temp: 28, hours: 46 },
        ],
        dry: [
            { temp: 7, hours: 4 },
            { temp: 8, hours: 11 },
            { temp: 9, hours: 17 },
            { temp: 10, hours: 32 },
            { temp: 11, hours: 85 },
            { temp: 12, hours: 147 },
            { temp: 13, hours: 121 },
            { temp: 14, hours: 271 },
            { temp: 15, hours: 383 },
            { temp: 16, hours: 390 },
            { temp: 17, hours: 315 },
            { temp: 18, hours: 253 },
            { temp: 19, hours: 286 },
            { temp: 20, hours: 312 },
            { temp: 21, hours: 314 },
            { temp: 22, hours: 336 },
            { temp: 23, hours: 336 },
            { temp: 24, hours: 510 },
            { temp: 25, hours: 724 },
            { temp: 26, hours: 735 },
            { temp: 27, hours: 707 },
            { temp: 28, hours: 675 },
            { temp: 29, hours: 440 },
            { temp: 30, hours: 371 },
            { temp: 31, hours: 312 },
            { temp: 32, hours: 344 },
            { temp: 33, hours: 194 },
            { temp: 34, hours: 30 },
        ]
    },

    tainan: {
        wet: [
            { temp: 5, hours: 7 },
            { temp: 6, hours: 14 },
            { temp: 7, hours: 20 },
            { temp: 8, hours: 45 },
            { temp: 9, hours: 110 },
            { temp: 10, hours: 97 },
            { temp: 11, hours: 137 },
            { temp: 12, hours: 202 },
            { temp: 13, hours: 340 },
            { temp: 14, hours: 398 },
            { temp: 15, hours: 419 },
            { temp: 16, hours: 366 },
            { temp: 17, hours: 361 },
            { temp: 18, hours: 319 },
            { temp: 19, hours: 331 },
            { temp: 20, hours: 349 },
            { temp: 21, hours: 372 },
            { temp: 22, hours: 428 },
            { temp: 23, hours: 605 },
            { temp: 24, hours: 784 },
            { temp: 25, hours: 1257 },
            { temp: 26, hours: 1419 },
            { temp: 27, hours: 377 },
            { temp: 28, hours: 3 },
        ],
        dry: [
            { temp: 9, hours: 3 },
            { temp: 10, hours: 17 },
            { temp: 11, hours: 37 },
            { temp: 12, hours: 89 },
            { temp: 13, hours: 80 },
            { temp: 14, hours: 171 },
            { temp: 15, hours: 322 },
            { temp: 16, hours: 334 },
            { temp: 17, hours: 328 },
            { temp: 18, hours: 293 },
            { temp: 19, hours: 336 },
            { temp: 20, hours: 306 },
            { temp: 21, hours: 326 },
            { temp: 22, hours: 308 },
            { temp: 23, hours: 332 },
            { temp: 24, hours: 366 },
            { temp: 25, hours: 480 },
            { temp: 26, hours: 576 },
            { temp: 27, hours: 763 },
            { temp: 28, hours: 1085 },
            { temp: 29, hours: 865 },
            { temp: 30, hours: 541 },
            { temp: 31, hours: 484 },
            { temp: 32, hours: 246 },
            { temp: 33, hours: 67 },
            { temp: 34, hours: 5 },
        ]
    },

    kaohsiung: {
        wet: [
            { temp: 6, hours: 16 },
            { temp: 7, hours: 4 },
            { temp: 8, hours: 21 },
            { temp: 9, hours: 40 },
            { temp: 10, hours: 114 },
            { temp: 11, hours: 99 },
            { temp: 12, hours: 174 },
            { temp: 13, hours: 255 },
            { temp: 14, hours: 359 },
            { temp: 15, hours: 389 },
            { temp: 16, hours: 414 },
            { temp: 17, hours: 401 },
            { temp: 18, hours: 351 },
            { temp: 19, hours: 366 },
            { temp: 20, hours: 331 },
            { temp: 21, hours: 354 },
            { temp: 22, hours: 411 },
            { temp: 23, hours: 577 },
            { temp: 24, hours: 820 },
            { temp: 25, hours: 1101 },
            { temp: 26, hours: 1285 },
            { temp: 27, hours: 768 },
            { temp: 28, hours: 108 },
        ],
        dry: [
            { temp: 8, hours: 7 },
            { temp: 9, hours: 9 },
            { temp: 10, hours: 23 },
            { temp: 11, hours: 33 },
            { temp: 12, hours: 74 },
            { temp: 13, hours: 102 },
            { temp: 14, hours: 179 },
            { temp: 15, hours: 289 },
            { temp: 16, hours: 319 },
            { temp: 17, hours: 349 },
            { temp: 18, hours: 268 },
            { temp: 19, hours: 337 },
            { temp: 20, hours: 290 },
            { temp: 21, hours: 337 },
            { temp: 22, hours: 371 },
            { temp: 23, hours: 391 },
            { temp: 24, hours: 504 },
            { temp: 25, hours: 762 },
            { temp: 26, hours: 840 },
            { temp: 27, hours: 676 },
            { temp: 28, hours: 716 },
            { temp: 29, hours: 560 },
            { temp: 30, hours: 487 },
            { temp: 31, hours: 450 },
            { temp: 32, hours: 291 },
            { temp: 33, hours: 89 },
            { temp: 34, hours: 5 },
        ]
    },

    hualien: {
        wet: [
            { temp: 7, hours: 2 },
            { temp: 8, hours: 24 },
            { temp: 9, hours: 42 },
            { temp: 10, hours: 113 },
            { temp: 11, hours: 209 },
            { temp: 12, hours: 240 },
            { temp: 13, hours: 248 },
            { temp: 14, hours: 309 },
            { temp: 15, hours: 455 },
            { temp: 16, hours: 435 },
            { temp: 17, hours: 399 },
            { temp: 18, hours: 418 },
            { temp: 19, hours: 450 },
            { temp: 20, hours: 395 },
            { temp: 21, hours: 428 },
            { temp: 22, hours: 465 },
            { temp: 23, hours: 805 },
            { temp: 24, hours: 960 },
            { temp: 25, hours: 921 },
            { temp: 26, hours: 827 },
            { temp: 27, hours: 538 },
            { temp: 28, hours: 77 },
        ],
        dry: [
            { temp: 11, hours: 7 },
            { temp: 12, hours: 24 },
            { temp: 13, hours: 130 },
            { temp: 14, hours: 140 },
            { temp: 15, hours: 225 },
            { temp: 16, hours: 268 },
            { temp: 17, hours: 375 },
            { temp: 18, hours: 464 },
            { temp: 19, hours: 464 },
            { temp: 20, hours: 488 },
            { temp: 21, hours: 435 },
            { temp: 22, hours: 421 },
            { temp: 23, hours: 460 },
            { temp: 24, hours: 622 },
            { temp: 25, hours: 828 },
            { temp: 26, hours: 792 },
            { temp: 27, hours: 622 },
            { temp: 28, hours: 556 },
            { temp: 29, hours: 587 },
            { temp: 30, hours: 453 },
            { temp: 31, hours: 259 },
            { temp: 32, hours: 120 },
            { temp: 33, hours: 20 },
        ]
    },

    taidong: {
        wet: [
            { temp: 9, hours: 21 },
            { temp: 10, hours: 39 },
            { temp: 11, hours: 166 },
            { temp: 12, hours: 198 },
            { temp: 13, hours: 266 },
            { temp: 14, hours: 235 },
            { temp: 15, hours: 362 },
            { temp: 16, hours: 437 },
            { temp: 17, hours: 439 },
            { temp: 18, hours: 431 },
            { temp: 19, hours: 417 },
            { temp: 20, hours: 428 },
            { temp: 21, hours: 419 },
            { temp: 22, hours: 492 },
            { temp: 23, hours: 771 },
            { temp: 24, hours: 1054 },
            { temp: 25, hours: 971 },
            { temp: 26, hours: 960 },
            { temp: 27, hours: 567 },
            { temp: 28, hours: 87 },
        ],
        dry: [
            { temp: 12, hours: 12 },
            { temp: 13, hours: 42 },
            { temp: 14, hours: 91 },
            { temp: 15, hours: 164 },
            { temp: 16, hours: 182 },
            { temp: 17, hours: 261 },
            { temp: 18, hours: 338 },
            { temp: 19, hours: 425 },
            { temp: 20, hours: 479 },
            { temp: 21, hours: 451 },
            { temp: 22, hours: 414 },
            { temp: 23, hours: 513 },
            { temp: 24, hours: 594 },
            { temp: 25, hours: 684 },
            { temp: 26, hours: 786 },
            { temp: 27, hours: 860 },
            { temp: 28, hours: 733 },
            { temp: 29, hours: 682 },
            { temp: 30, hours: 559 },
            { temp: 31, hours: 425 },
            { temp: 32, hours: 58 },
            { temp: 33, hours: 6 },
            { temp: 34, hours: 1 },
        ]
    },

    chenggong: {
        wet: [
            { temp: 8, hours: 1 },
            { temp: 9, hours: 20 },
            { temp: 10, hours: 50 },
            { temp: 11, hours: 167 },
            { temp: 12, hours: 197 },
            { temp: 13, hours: 280 },
            { temp: 14, hours: 256 },
            { temp: 15, hours: 397 },
            { temp: 16, hours: 423 },
            { temp: 17, hours: 485 },
            { temp: 18, hours: 419 },
            { temp: 19, hours: 401 },
            { temp: 20, hours: 449 },
            { temp: 21, hours: 465 },
            { temp: 22, hours: 618 },
            { temp: 23, hours: 943 },
            { temp: 24, hours: 1021 },
            { temp: 25, hours: 824 },
            { temp: 26, hours: 750 },
            { temp: 27, hours: 500 },
            { temp: 28, hours: 93 },
            { temp: 29, hours: 1 },
        ],
        dry: [
            { temp: 11, hours: 2 },
            { temp: 12, hours: 21 },
            { temp: 13, hours: 30 },
            { temp: 14, hours: 110 },
            { temp: 15, hours: 209 },
            { temp: 16, hours: 234 },
            { temp: 17, hours: 371 },
            { temp: 18, hours: 416 },
            { temp: 19, hours: 455 },
            { temp: 20, hours: 494 },
            { temp: 21, hours: 427 },
            { temp: 22, hours: 467 },
            { temp: 23, hours: 584 },
            { temp: 24, hours: 786 },
            { temp: 25, hours: 963 },
            { temp: 26, hours: 853 },
            { temp: 27, hours: 650 },
            { temp: 28, hours: 553 },
            { temp: 29, hours: 463 },
            { temp: 30, hours: 427 },
            { temp: 31, hours: 210 },
            { temp: 32, hours: 33 },
            { temp: 33, hours: 2 },
        ]
    },

    hengchun: {
        wet: [
            { temp: 11, hours: 25 },
            { temp: 12, hours: 96 },
            { temp: 13, hours: 227 },
            { temp: 14, hours: 260 },
            { temp: 15, hours: 292 },
            { temp: 16, hours: 394 },
            { temp: 17, hours: 470 },
            { temp: 18, hours: 478 },
            { temp: 19, hours: 506 },
            { temp: 20, hours: 443 },
            { temp: 21, hours: 436 },
            { temp: 22, hours: 437 },
            { temp: 23, hours: 610 },
            { temp: 24, hours: 972 },
            { temp: 25, hours: 1150 },
            { temp: 26, hours: 1239 },
            { temp: 27, hours: 683 },
            { temp: 28, hours: 42 },
        ],
        dry: [
            { temp: 14, hours: 7 },
            { temp: 15, hours: 25 },
            { temp: 16, hours: 110 },
            { temp: 17, hours: 227 },
            { temp: 18, hours: 228 },
            { temp: 19, hours: 356 },
            { temp: 20, hours: 445 },
            { temp: 21, hours: 445 },
            { temp: 22, hours: 475 },
            { temp: 23, hours: 477 },
            { temp: 24, hours: 490 },
            { temp: 25, hours: 671 },
            { temp: 26, hours: 970 },
            { temp: 27, hours: 990 },
            { temp: 28, hours: 1063 },
            { temp: 29, hours: 652 },
            { temp: 30, hours: 438 },
            { temp: 31, hours: 458 },
            { temp: 32, hours: 215 },
            { temp: 33, hours: 18 },
        ]
    },
};

// ============ 經驗範圍值建議 ============
const SUGGESTED_VALUES = {
    power: {
        'distribution-loss': { min: 0.01, max: 0.03, desc: '配電損耗' },
        'transformer-loss': { min: 0.005, max: 0.015, desc: '變壓器損耗' },
        'generator-power': { min: 0.005, max: 0.01, desc: '發電機用電' },
        'other-power': { min: 0.005, max: 0.01, desc: '其他電力設施' }
    },
    cooling: {
        'cdu-power': { min: 0.01, max: 0.03, desc: 'CDU 冷卻分配單元' },
        'crac-power': { min: 0.03, max: 0.08, desc: 'CRAH/CRAC/FWU 機組' },
        'pump-fan-power': { min: 0.02, max: 0.05, desc: '幫浦與風扇' },
        'other-cooling': { min: 0.01, max: 0.02, desc: '其他冷卻設備' }
    },
    other: {
        'lighting-power': { min: 0.005, max: 0.01, desc: '照明用電' },
        'fire-system-power': { min: 0.002, max: 0.005, desc: '消防系統' },
        'security-power': { min: 0.001, max: 0.003, desc: '保全系統' },
        'office-power': { min: 0.01, max: 0.03, desc: '辦公室用電' },
        'misc-power': { min: 0.005, max: 0.01, desc: '其他雜項用電' }
    }
};

const REGION_NAMES = {
    tamsui: '淡水',
    taipei: '臺北',
    keelung: '基隆',
    yilan: '宜蘭',
    newtaipei: '新北',
    taoyuan: '桃園',
    hsinchu: '新竹',
    xinwu: '新屋',
    taichung: '臺中',
    chiayi: '嘉義',
    tainan: '臺南',
    kaohsiung: '高雄',
    hualien: '花蓮',
    taidong: '臺東',
    chenggong: '成功',
    hengchun: '恆春'
};

let currentSystem = 'water';
let currentRegion = 'tamsui';
let currentWeatherData = null;

document.addEventListener('DOMContentLoaded', function() {
    selectSystem('water');
});

function suggestValue(inputId, category) {
    const itPower = parseFloat(document.getElementById('it-power').value) || 0;
    if (itPower <= 0) {
        alert('請先輸入 IT 設備用電量！');
        document.getElementById('it-power').focus();
        return;
    }
    const suggestion = SUGGESTED_VALUES[category][inputId];
    if (suggestion) {
        const midValue = (suggestion.min + suggestion.max) / 2;
        const suggested = itPower * midValue;
        document.getElementById(inputId).value = suggested.toFixed(1);
    }
}

// 自動生成整個類別的建議值
function autoFillCategory(category) {
    const itPower = parseFloat(document.getElementById('it-power').value) || 0;
    if (itPower <= 0) {
        alert('請先輸入 IT 設備用電量！');
        document.getElementById('it-power').focus();
        return;
    }
    
    const categoryValues = SUGGESTED_VALUES[category];
    let filledCount = 0;
    
    for (const [inputId, suggestion] of Object.entries(categoryValues)) {
        const input = document.getElementById(inputId);
        const currentValue = parseFloat(input?.value) || 0;
        
        // 只填寫尚未填寫的格子（值為0或空）
        if (currentValue === 0) {
            const midValue = (suggestion.min + suggestion.max) / 2;
            const suggested = itPower * midValue;
            input.value = suggested.toFixed(1);
            filledCount++;
        }
    }
    
    if (filledCount > 0) {
        // 展開該區塊讓使用者看到結果
        const detailsId = category === 'power' ? 'power-details' : 
                         category === 'cooling' ? 'cooling-details' : 'other-details';
        const detailsSection = document.getElementById(detailsId);
        const toggleBtn = detailsSection.previousElementSibling.querySelector('.toggle-btn');
        
        if (detailsSection.classList.contains('collapsed')) {
            detailsSection.classList.remove('collapsed');
            toggleBtn.textContent = '收起 ▲';
        }
    } else {
        alert('所有項目都已經填寫過了！');
    }
}

function toggleDetails(id) {
    const element = document.getElementById(id);
    const button = element.previousElementSibling.querySelector('.toggle-btn');
    if (element.classList.contains('collapsed')) {
        element.classList.remove('collapsed');
        button.textContent = '收起 ▲';
    } else {
        element.classList.add('collapsed');
        button.textContent = '展開 ▼';
    }
}

function selectSystem(system) {
    currentSystem = system;
    document.querySelectorAll('.system-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.system === system) {
            btn.classList.add('active');
        }
    });
    const description = document.getElementById('system-description');
    if (system === 'water') {
        description.innerHTML = `<p>選擇水冷系統 - 使用 <strong>濕球溫度</strong> 進行計算</p>`;
        // 隱藏濕球分布圖（因為水冷只用一個分布圖）
        document.getElementById('wet-stats-section').classList.add('hidden');
    } else {
        description.innerHTML = `<p>選擇風冷系統 - 冷水機組使用 <strong>乾球溫度</strong>，冷卻水塔使用 <strong>濕球溫度</strong></p>`;
    }
    document.getElementById('region-section').classList.remove('hidden');
    if (currentRegion) {
        selectRegion(currentRegion);
    }
}

function selectRegion(region) {
    currentRegion = region;
    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.region === region) {
            btn.classList.add('active');
        }
    });
    
    // 更新乾球溫度分布圖
    const dryWeatherData = WEATHER_DATA[region].dry;
    currentWeatherData = dryWeatherData;
    updateStatsDisplay('dry', '乾球');
    
    // 如果是風冷系統，額外生成濕球溫度分布圖和表格
    if (currentSystem === 'air') {
        updateWetStatsDisplay(region);
        generatePowerInputTables(region);
    } else {
        generatePowerInputTable();
    }
}

function updateStatsDisplay() {
    if (!currentWeatherData) return;
    const regionName = REGION_NAMES[currentRegion];
    const tempLabel = currentSystem === 'water' ? '濕球' : '乾球';
    document.getElementById('region-title').textContent = regionName;
    document.getElementById('temp-type').textContent = tempLabel;
    const totalHours = currentWeatherData.reduce((sum, item) => sum + item.hours, 0);
    const maxHours = Math.max(...currentWeatherData.map(d => d.hours));
    const chartContainer = document.getElementById('temp-chart');
    const sortedData = [...currentWeatherData].sort((a, b) => a.temp - b.temp);
    chartContainer.innerHTML = sortedData.map(item => {
        const width = maxHours > 0 ? (item.hours / maxHours * 100) : 0;
        const percent = totalHours > 0 ? (item.hours / totalHours * 100).toFixed(1) : '0.0';
        let colorClass = 'low';
        if (currentSystem === 'air') {
            if (item.temp >= 32) colorClass = 'high';
            else if (item.temp >= 28) colorClass = 'medium';
        } else {
            if (item.temp >= 24) colorClass = 'high';
            else if (item.temp >= 20) colorClass = 'medium';
        }
        return `<div class="temp-chart-row"><div class="temp-chart-label">${item.temp}°C</div><div class="temp-bar-container"><div class="temp-bar-fill ${colorClass}" style="width: ${width}%;"></div></div><div class="temp-chart-value">${item.hours}h (${percent}%)</div></div>`;
    }).join('');
    document.getElementById('total-hours').textContent = totalHours.toLocaleString();
    document.getElementById('stats-section').classList.remove('hidden');
}

// 風冷系統專用：更新濕球溫度分布圖
function updateWetStatsDisplay(region) {
    // 更新濕球溫度分布的標題區域
    const regionName = REGION_NAMES[region];
    document.getElementById('wet-region-title').textContent = regionName;
    
    const wetWeatherData = WEATHER_DATA[region].wet;
    const totalHours = wetWeatherData.reduce((sum, item) => sum + item.hours, 0);
    const maxHours = Math.max(...wetWeatherData.map(d => d.hours));
    const chartContainer = document.getElementById('wet-temp-chart');
    const sortedData = [...wetWeatherData].sort((a, b) => a.temp - b.temp);
    
    chartContainer.innerHTML = sortedData.map(item => {
        const width = maxHours > 0 ? (item.hours / maxHours * 100) : 0;
        const percent = totalHours > 0 ? (item.hours / totalHours * 100).toFixed(1) : '0.0';
        let colorClass = 'low';
        if (item.temp >= 24) colorClass = 'high';
        else if (item.temp >= 20) colorClass = 'medium';
        return `<div class="temp-chart-row"><div class="temp-chart-label">${item.temp}°C</div><div class="temp-bar-container"><div class="temp-bar-fill ${colorClass}" style="width: ${width}%;"></div></div><div class="temp-chart-value">${item.hours}h (${percent}%)</div></div>`;
    }).join('');
    
    document.getElementById('wet-total-hours').textContent = totalHours.toLocaleString();
    document.getElementById('wet-stats-section').classList.remove('hidden');
}

// 水冷系統：冷水機組和冷卻水塔都使用濕球溫度
function generatePowerInputTable() {
    const container = document.getElementById('power-input-tables');
    const tempLabel = '濕球';
    const wetData = WEATHER_DATA[currentRegion].wet;
    const sortedData = [...wetData].sort((a, b) => a.temp - b.temp);
    const activeTemps = sortedData.filter(d => d.hours > 0);
    
    // 生成冷水機組表格
    let chillerTableHTML = generatePowerTableHTML('chiller', '❄️ 冷水機組耗電量 (kW)', tempLabel, activeTemps, 'chiller-avg-power');
    
    // 生成冷卻水塔表格（風冷系統也用濕球）
    let towerTableHTML = generatePowerTableHTML('tower', '🏭 冷卻水塔耗電量 (kW)', tempLabel, activeTemps, 'tower-avg-power');
    
    container.innerHTML = chillerTableHTML + towerTableHTML;
    document.getElementById('power-tables-section').classList.remove('hidden');
}

// 風冷系統：冷水機組用乾球，冷卻水塔用濕球
function generatePowerInputTables(region) {
    const container = document.getElementById('power-input-tables');
    
    // 乾球數據 - 冷水機組
    const dryData = WEATHER_DATA[region].dry;
    const drySorted = [...dryData].sort((a, b) => a.temp - b.temp);
    const dryActive = drySorted.filter(d => d.hours > 0);
    
    // 濕球數據 - 冷卻水塔
    const wetData = WEATHER_DATA[region].wet;
    const wetSorted = [...wetData].sort((a, b) => a.temp - b.temp);
    const wetActive = wetSorted.filter(d => d.hours > 0);
    
    // 生成冷水機組表格（乾球）
    let chillerTableHTML = generatePowerTableHTML('chiller', '❄️ 冷水機組耗電量 (kW)', '乾球', dryActive, 'chiller-avg-power');
    
    // 生成冷卻水塔表格（濕球）
    let towerTableHTML = generatePowerTableHTML('tower', '🏭 冷卻水塔耗電量 (kW)', '濕球', wetActive, 'tower-avg-power');
    
    container.innerHTML = chillerTableHTML + towerTableHTML;
    document.getElementById('power-tables-section').classList.remove('hidden');
}

// 生成表格的通用函數
function generatePowerTableHTML(prefix, title, tempLabel, activeTemps, avgId) {
    let html = `
        <div class="power-table-section">
            <h3>${title}</h3>
            <div class="power-table-scroll">
                <table class="power-table">
                    <thead>
                        <tr>
                            <th>${tempLabel}溫度 (°C)</th>
                            <th>時數 (小時/年)</th>
                            <th>耗電量 (kW)</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    activeTemps.forEach(item => {
        const id = `${prefix}-temp-${item.temp}`;
        html += `
            <tr>
                <td><strong>${item.temp}°C</strong></td>
                <td>${item.hours}</td>
                <td><input type="number" id="${id}" class="power-input" placeholder="0" step="0.1" value="0" oninput="updateWeightedAverages()"></td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
            <div class="table-summary">
                <span>平均耗電量: <strong id="${avgId}">0</strong> kW</span>
                <button type="button" class="auto-fill-btn-large" onclick="${prefix === 'chiller' ? 'autoFillChiller()' : 'autoFillTower()'}">自動生成其他</button>
            </div>
        </div>
    `;
    
    return html;
}

function updateWeightedAverages() {
    if (!currentWeatherData) return;
    
    let chillerTotal = 0, chillerHours = 0;
    let towerTotal = 0, towerHours = 0;
    
    if (currentSystem === 'water') {
        // 水冷系統：兩者都使用濕球
        const wetData = WEATHER_DATA[currentRegion].wet;
        wetData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                const towerPower = parseFloat(towerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    } else {
        // 風冷系統：冷水機組用乾球，冷卻水塔用濕球
        const dryData = WEATHER_DATA[currentRegion].dry;
        const wetData = WEATHER_DATA[currentRegion].wet;
        
        // 冷水機組 - 乾球
        dryData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
            }
        });
        
        // 冷卻水塔 - 濕球
        wetData.forEach(item => {
            if (item.hours > 0) {
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const towerPower = parseFloat(towerInput?.value) || 0;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    }
    
    const chillerAvg = chillerHours > 0 ? chillerTotal / chillerHours : 0;
    const towerAvg = towerHours > 0 ? towerTotal / towerHours : 0;
    document.getElementById('chiller-avg-power').textContent = chillerAvg.toFixed(2);
    document.getElementById('tower-avg-power').textContent = towerAvg.toFixed(2);
}

// 線性插值自動填充冷水機組
function autoFillChiller() {
    if (currentSystem === 'water') {
        autoFillByPrefix('chiller-temp-', WEATHER_DATA[currentRegion].wet);
    } else {
        autoFillByPrefix('chiller-temp-', WEATHER_DATA[currentRegion].dry);
    }
}

// 線性插值自動填充冷卻水塔
function autoFillTower() {
    if (currentSystem === 'water') {
        autoFillByPrefix('tower-temp-', WEATHER_DATA[currentRegion].wet);
    } else {
        autoFillByPrefix('tower-temp-', WEATHER_DATA[currentRegion].wet);
    }
}

// 通用線性插值函數
function autoFillByPrefix(prefix, weatherData) {
    // 收集已輸入的數據點
    const dataPoints = [];
    const sortedData = [...weatherData].sort((a, b) => a.temp - b.temp);
    
    sortedData.forEach(item => {
        const input = document.getElementById(`${prefix}${item.temp}`);
        const value = parseFloat(input?.value);
        if (!isNaN(value) && value > 0) {
            dataPoints.push({ temp: item.temp, power: value });
        }
    });
    
    // 需要至少1個點才能進行插值
    if (dataPoints.length < 1) {
        alert('至少需要輸入 1 個溫度點的耗電量！');
        return;
    }
    
    // 對數據點按溫度排序
    dataPoints.sort((a, b) => a.temp - b.temp);
    
    // 填充所有空白格子
    sortedData.forEach(item => {
        const input = document.getElementById(`${prefix}${item.temp}`);
        const currentValue = parseFloat(input?.value);
        
        // 只填充尚未填寫的格子
        if ((isNaN(currentValue) || currentValue === 0) && item.hours > 0) {
            const interpolatedValue = linearInterpolation(item.temp, dataPoints);
            if (interpolatedValue !== null) {
                input.value = interpolatedValue.toFixed(1);
            }
        }
    });
    
    // 更新加權平均值
    updateWeightedAverages();
}

// 線性插值計算
function linearInterpolation(temp, dataPoints) {
    // 對數據點按溫度排序
    dataPoints.sort((a, b) => a.temp - b.temp);
    
    // 如果只有1個點，無法插值
    if (dataPoints.length === 1) {
        return dataPoints[0].power;
    }
    
    // 如果只有2個點，直接用這兩點計算線性關係
    if (dataPoints.length === 2) {
        const p1 = dataPoints[0];
        const p2 = dataPoints[1];
        // 線性關係：power = slope * temp + intercept
        const slope = (p2.power - p1.power) / (p2.temp - p1.temp);
        const intercept = p1.power - slope * p1.temp;
        return slope * temp + intercept;
    }
    
    // 找到 temp 所在的區間
    for (let i = 0; i < dataPoints.length - 1; i++) {
        if (temp >= dataPoints[i].temp && temp <= dataPoints[i + 1].temp) {
            const lower = dataPoints[i];
            const upper = dataPoints[i + 1];
            // 線性插值公式: y = y1 + (y2 - y1) * (x - x1) / (x2 - x1)
            const ratio = (temp - lower.temp) / (upper.temp - lower.temp);
            return lower.power + (upper.power - lower.power) * ratio;
        }
    }
    
    // temp 低於所有數據點：用最低溫度點進行線性外推
    if (temp < dataPoints[0].temp) {
        const p1 = dataPoints[0];
        const p2 = dataPoints[1];
        const slope = (p2.power - p1.power) / (p2.temp - p1.temp);
        const intercept = p1.power - slope * p1.temp;
        return slope * temp + intercept;
    }
    
    // temp 高於所有數據點：用最高溫度點進行線性外推
    const last = dataPoints[dataPoints.length - 1];
    const secondLast = dataPoints[dataPoints.length - 2];
    const slope = (last.power - secondLast.power) / (last.temp - secondLast.temp);
    const intercept = last.power - slope * last.temp;
    return slope * temp + intercept;
}

function calculatePUE() {
    const itPower = parseFloat(document.getElementById('it-power').value) || 0;
    if (itPower <= 0) { alert('請輸入 IT 設備用電量！'); return; }
    
    // 收集電力設施用電
    const distributionLoss = parseFloat(document.getElementById('distribution-loss').value) || 0;
    const transformerLoss = parseFloat(document.getElementById('transformer-loss').value) || 0;
    const generatorPower = parseFloat(document.getElementById('generator-power').value) || 0;
    const otherPower = parseFloat(document.getElementById('other-power').value) || 0;
    const powerFacilityPower = distributionLoss + transformerLoss + generatorPower + otherPower;
    
    // 收集其他空調設備用電
    const cduPower = parseFloat(document.getElementById('cdu-power').value) || 0;
    const cracPower = parseFloat(document.getElementById('crac-power').value) || 0;
    const pumpFanPower = parseFloat(document.getElementById('pump-fan-power').value) || 0;
    const otherCooling = parseFloat(document.getElementById('other-cooling').value) || 0;
    
    let chillerTotal = 0, chillerHours = 0;
    let towerTotal = 0, towerHours = 0;
    
    if (currentSystem === 'water') {
        // 水冷系統：兩者都使用濕球
        const wetData = WEATHER_DATA[currentRegion].wet;
        wetData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                const towerPower = parseFloat(towerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    } else {
        // 風冷系統：冷水機組用乾球，冷卻水塔用濕球
        const dryData = WEATHER_DATA[currentRegion].dry;
        const wetData = WEATHER_DATA[currentRegion].wet;
        
        // 冷水機組 - 乾球
        dryData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
            }
        });
        
        // 冷卻水塔 - 濕球
        wetData.forEach(item => {
            if (item.hours > 0) {
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const towerPower = parseFloat(towerInput?.value) || 0;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    }
    
    const chillerAvgPower = chillerHours > 0 ? chillerTotal / chillerHours : 0;
    const towerAvgPower = towerHours > 0 ? towerTotal / towerHours : 0;
    
    // 計算其他用電
    const lightingPower = parseFloat(document.getElementById('lighting-power').value) || 0;
    const fireSystemPower = parseFloat(document.getElementById('fire-system-power').value) || 0;
    const securityPower = parseFloat(document.getElementById('security-power').value) || 0;
    const officePower = parseFloat(document.getElementById('office-power').value) || 0;
    const miscPower = parseFloat(document.getElementById('misc-power').value) || 0;
    const otherPowerTotal = lightingPower + fireSystemPower + securityPower + officePower + miscPower;
    
    // 計算總冷卻用電 (加權平均 + 其他固定設備)
    const totalCoolingPower = chillerAvgPower + towerAvgPower + cduPower + cracPower + pumpFanPower + otherCooling;
    
    // 計算總設施用電
    const totalFacilityPower = itPower + powerFacilityPower + totalCoolingPower + otherPowerTotal;
    
    // 計算 PUE
    const pue = totalFacilityPower / itPower;
    
    // 計算年度 CLF (加權平均)
    let weightedCLF = 0;
    
    if (currentSystem === 'water') {
        // 水冷系統：兩者都使用濕球
        const wetData = WEATHER_DATA[currentRegion].wet;
        wetData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                const towerPower = parseFloat(towerInput?.value) || 0;
                const totalPower = chillerPower + towerPower;
                if (totalPower > 0) {
                    const clf = totalPower / itPower;
                    weightedCLF += clf * item.hours;
                }
            }
        });
    } else {
        // 風冷系統：冷水機組用乾球，冷卻水塔用濕球
        const dryData = WEATHER_DATA[currentRegion].dry;
        const wetData = WEATHER_DATA[currentRegion].wet;
        const totalHours = dryData.reduce((sum, d) => sum + d.hours, 0);
        
        // 乾球 - 冷水機組
        dryData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                if (chillerPower > 0) {
                    const clf = chillerPower / itPower;
                    weightedCLF += clf * item.hours;
                }
            }
        });
        
        // 濕球 - 冷卻水塔
        wetData.forEach(item => {
            if (item.hours > 0) {
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const towerPower = parseFloat(towerInput?.value) || 0;
                if (towerPower > 0) {
                    const clf = towerPower / itPower;
                    weightedCLF += clf * item.hours;
                }
            }
        });
    }
    
    const totalHours = currentWeatherData.reduce((sum, item) => sum + item.hours, 0);
    const avgCLF = totalHours > 0 ? weightedCLF / totalHours : 0;
    
    // 計算年度節能潛力
    const annualSavingsKWh = avgCLF * itPower * 8760;
    
    displayResults({
        pue,
        itPower,
        totalFacilityPower,
        powerFacilityPower,
        totalCoolingPower,
        chillerAvgPower,
        towerAvgPower,
        otherPowerTotal,
        avgCLF,
        annualSavingsKWh,
        currentSystem,
        currentRegion
    });
}

function displayResults(data) {
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('show');
    const total = data.totalFacilityPower;
    const pueElement = document.getElementById('pue-value');
    const pueIndicator = document.getElementById('pue-indicator');
    pueElement.textContent = data.pue.toFixed(3);
    pueIndicator.className = 'pue-indicator';
    if (data.pue <= 1.4) pueIndicator.classList.add('excellent');
    else if (data.pue <= 1.6) pueIndicator.classList.add('good');
    else if (data.pue <= 2.0) pueIndicator.classList.add('average');
    else pueIndicator.classList.add('poor');
    document.getElementById('total-facility-power').textContent = total.toFixed(1);
    document.getElementById('total-it-power').textContent = data.itPower.toFixed(1);
    updateChart(data, total);
    document.getElementById('chiller-result').textContent = data.chillerAvgPower.toFixed(2);
    document.getElementById('tower-result').textContent = data.towerAvgPower.toFixed(2);
    document.getElementById('clf-result').textContent = data.avgCLF.toFixed(4);
    document.getElementById('energy-savings-result').textContent = Math.round(data.annualSavingsKWh).toLocaleString();
    updateDetailTable(data, total);
    updateRecommendations(data);
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

function updateChart(data, total) {
    const itBar = document.getElementById('it-bar'), coolingBar = document.getElementById('cooling-bar');
    const powerBar = document.getElementById('power-bar'), otherBar = document.getElementById('other-bar');
    const itPercent = data.itPower / total * 100;
    itBar.querySelector('.bar-fill').style.width = Math.max(itPercent, 5) + '%';
    itBar.querySelector('.bar-value').textContent = data.itPower.toFixed(1) + ' kW (' + itPercent.toFixed(1) + '%)';
    const coolingPercent = data.totalCoolingPower / total * 100;
    coolingBar.querySelector('.bar-fill').style.width = Math.max(coolingPercent, 5) + '%';
    coolingBar.querySelector('.bar-value').textContent = data.totalCoolingPower.toFixed(1) + ' kW (' + coolingPercent.toFixed(1) + '%)';
    const powerPercent = data.powerFacilityPower / total * 100;
    powerBar.querySelector('.bar-fill').style.width = Math.max(powerPercent, 5) + '%';
    powerBar.querySelector('.bar-value').textContent = data.powerFacilityPower.toFixed(1) + ' kW (' + powerPercent.toFixed(1) + '%)';
    const otherPercent = data.otherPowerTotal / total * 100;
    otherBar.querySelector('.bar-fill').style.width = Math.max(otherPercent, 5) + '%';
    otherBar.querySelector('.bar-value').textContent = data.otherPowerTotal.toFixed(1) + ' kW (' + otherPercent.toFixed(1) + '%)';
}

function updateDetailTable(data, total) {
    const tbody = document.getElementById('detail-tbody');
    const items = [
        { name: 'IT 設備用電', value: data.itPower },
        { name: '冷水機組 (加權平均)', value: data.chillerAvgPower },
        { name: '冷卻水塔 (加權平均)', value: data.towerAvgPower },
        { name: 'CDU 冷卻分配單元', value: parseFloat(document.getElementById('cdu-power').value) || 0 },
        { name: 'CRAH/CRAC/FWU 機組', value: parseFloat(document.getElementById('crac-power').value) || 0 },
        { name: '幫浦與風扇', value: parseFloat(document.getElementById('pump-fan-power').value) || 0 },
        { name: '配電系統損耗', value: parseFloat(document.getElementById('distribution-loss').value) || 0 },
        { name: '變壓器損耗', value: parseFloat(document.getElementById('transformer-loss').value) || 0 },
        { name: '發電機用電', value: parseFloat(document.getElementById('generator-power').value) || 0 },
        { name: '照明用電', value: parseFloat(document.getElementById('lighting-power').value) || 0 },
        { name: '其他', value: data.otherPowerTotal }
    ];
    tbody.innerHTML = items.map(item => {
        if (item.value === 0 && item.name !== '其他' && item.name !== 'IT 設備用電') return '';
        const percent = total > 0 ? (item.value / total * 100).toFixed(1) : '0.0';
        return `<tr><td>${item.name}</td><td>${item.value.toFixed(1)} kW</td><td>${percent}%</td></tr>`;
    }).join('') + `<tr><td><strong>總計</strong></td><td><strong>${total.toFixed(1)} kW</strong></td><td><strong>100.0%</strong></td></tr>`;
}

function updateRecommendations(data) {
    const content = document.getElementById('recommendations-content');
    const recommendations = [];
    const coolingPercent = data.totalCoolingPower / data.totalFacilityPower * 100;
    if (coolingPercent > 40) {
        recommendations.push({ type: 'warning', icon: '❄️', text: `冷卻用電佔比 ${coolingPercent.toFixed(1)}%，偏高。建議優化冷水機組效率或增加免費冷卻時數。` });
    } else if (coolingPercent < 20) {
        recommendations.push({ type: 'good', icon: '✅', text: `冷卻用電佔比 ${coolingPercent.toFixed(1)}%，表現優異！` });
    }
    if (data.pue > 1.6) {
        recommendations.push({ type: 'danger', icon: '🎯', text: `PUE 值 ${data.pue.toFixed(3)}，有改善空間。目標應控制在 1.4 以下。` });
    } else if (data.pue <= 1.4) {
        recommendations.push({ type: 'good', icon: '🏆', text: `PUE 值 ${data.pue.toFixed(3)}，達到高效節能標準！` });
    }
    if (data.currentSystem === 'air') {
        recommendations.push({ type: 'info', icon: '🌬️', text: '風冷系統在高溫環境下效率較低，可考慮在水冷系統可用時切換。' });
    } else {
        recommendations.push({ type: 'info', icon: '💧', text: '水冷系統在低濕球溫度時段可達到更佳節能效果，善用免費冷卻。' });
    }
    if (data.currentRegion === 'kaohsiung') {
        recommendations.push({ type: 'info', icon: '🌡️', text: '高雄氣候炎熱，建議優先改善冷卻系統或考慮海水冷卻技術。' });
    } else if (data.currentRegion === 'taichung') {
        recommendations.push({ type: 'info', icon: '🌤️', text: '台中氣候適中，是三個地區中免費冷卻時數較高的區域。' });
    } else {
        recommendations.push({ type: 'info', icon: '🌧️', text: '桃園氣候濕潤，水冷系統效率需注意除濕負荷。' });
    }
    content.innerHTML = recommendations.map(rec => `<div class="recommendation-item ${rec.type}"><span class="recommendation-icon">${rec.icon}</span><span>${rec.text}</span></div>`).join('');
}

function resetForm() {
    document.getElementById('pue-form').reset();
    document.getElementById('result-section').classList.remove('show');
    document.querySelectorAll('.details-section').forEach(el => el.classList.add('collapsed'));
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.textContent = '展開 ▼');
    document.getElementById('power-tables-section').classList.add('hidden');
    document.getElementById('wet-stats-section').classList.add('hidden');
    if (currentRegion) {
        selectRegion(currentRegion);
    }
}

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT') {
            calculatePUE();
        }
    }
});

// 產生 PDF 報告
function generatePDFReport() {
    // 確保計算結果已顯示
    const resultSection = document.getElementById('result-section');
    if (!resultSection.classList.contains('show')) {
        alert('請先計算 PUE！');
        return;
    }
    
    // 設定報告日期
    const now = new Date();
    const dateStr = now.getFullYear() + '/' + 
                   String(now.getMonth() + 1).padStart(2, '0') + '/' + 
                   String(now.getDate()).padStart(2, '0') + ' ' + 
                   String(now.getHours()).padStart(2, '0') + ':' + 
                   String(now.getMinutes()).padStart(2, '0');
    resultSection.setAttribute('data-date', dateStr);
    
    // 設定報告資訊
    const regionName = REGION_NAMES[currentRegion];
    const systemName = currentSystem === 'water' ? '水冷冰機系統' : '風冷冰機系統';
    const itPower = document.getElementById('it-power').value;
    document.getElementById('report-meta').innerHTML = 
        `產生日期: ${dateStr} | 地區: ${regionName} | 冷卻系統: ${systemName} | IT 用電: ${itPower} kW`;
    
    // 使用瀏覽器的列印功能產生 PDF
    window.print();
}
