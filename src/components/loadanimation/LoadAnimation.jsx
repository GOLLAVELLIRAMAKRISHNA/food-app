import React from 'react'
import './LoadAnimation.css'
import { assets } from '../../assets/assets'

const LoadAnimation = () => {
    return (
        <div className='load-animation-container'>
            <div className="website_title">
                <svg width="743" height="101" viewBox="0 0 743 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.376 83.496C6.92 83.496 4.424 82.632 2.888 80.904C1.352 79.176 0.584 76.392 0.584 72.552C0.584 69.352 1.032 64.552 1.928 58.152C2.824 51.688 4.552 40.872 7.112 25.704L2.888 17.16C8.968 13.256 14.472 11.304 19.4 11.304C23.496 11.304 25.544 13.8 25.544 18.792C25.544 19.88 25.192 22.44 24.488 26.472C23.848 30.504 23.112 34.792 22.28 39.336C20.808 47.912 19.688 54.568 18.92 59.304C18.216 63.976 17.864 67.304 17.864 69.288C17.864 71.784 18.056 73.864 18.44 75.528C18.888 77.128 19.592 78.568 20.552 79.848C17.544 82.28 14.152 83.496 10.376 83.496ZM27.272 55.944C24.712 55.944 21.48 55.432 17.576 54.408L19.304 45.192C22.184 45.768 25.32 46.056 28.712 46.056L36.776 44.04C36.84 44.296 36.872 44.584 36.872 44.904C36.872 45.224 36.904 45.512 36.968 45.768C37.032 46.088 37.064 46.44 37.064 46.824C37.064 47.144 37.064 47.464 37.064 47.784C37.064 50.344 36.2 52.36 34.472 53.832C32.744 55.24 30.344 55.944 27.272 55.944ZM36.104 30.312C33.16 30.312 29.896 29.992 26.312 29.352C22.792 28.648 19.784 27.752 17.288 26.664L18.92 16.488C24.232 16.488 28.968 16.168 33.128 15.528C37.288 14.888 42.472 13.864 48.68 12.456C49.128 12.392 49.576 12.296 50.024 12.168C50.472 12.04 50.888 11.912 51.272 11.784C51.72 13.704 51.944 15.496 51.944 17.16C51.944 21.384 50.504 24.648 47.624 26.952C44.744 29.192 40.904 30.312 36.104 30.312ZM78.47 83.4C73.414 83.4 68.998 82.376 65.222 80.328C61.446 78.216 58.534 75.272 56.486 71.496C54.438 67.656 53.414 63.208 53.414 58.152C53.414 51.432 54.918 45.448 57.926 40.2C60.934 34.952 65.126 30.856 70.502 27.912C75.878 24.904 81.958 23.4 88.742 23.4C91.11 23.4 93.478 23.656 95.846 24.168C96.55 25.832 96.87 28.04 96.806 30.792C91.302 30.792 86.502 32.008 82.406 34.44C78.31 36.872 75.142 40.2 72.902 44.424C70.726 48.648 69.638 53.352 69.638 58.536C69.638 63.976 70.598 68.072 72.518 70.824C74.502 73.512 77.254 74.856 80.774 74.856C83.718 74.856 86.374 74.056 88.742 72.456C91.11 70.792 93.062 68.456 94.598 65.448C96.134 62.376 97.126 58.792 97.574 54.696C95.078 53.224 93.222 51.496 92.006 49.512C90.79 47.464 90.182 45.064 90.182 42.312C90.182 40.136 90.63 38.152 91.526 36.36C92.486 34.504 93.766 33.064 95.366 32.04C96.966 31.016 98.726 30.504 100.646 30.504C104.102 30.504 106.854 31.912 108.902 34.728C111.014 37.544 112.07 41.32 112.07 46.056C112.07 52.904 110.566 59.176 107.558 64.872C104.55 70.568 100.486 75.08 95.366 78.408C90.246 81.736 84.614 83.4 78.47 83.4ZM147.751 83.4C142.695 83.4 138.279 82.376 134.503 80.328C130.727 78.216 127.815 75.272 125.767 71.496C123.719 67.656 122.695 63.208 122.695 58.152C122.695 51.432 124.199 45.448 127.207 40.2C130.215 34.952 134.407 30.856 139.783 27.912C145.159 24.904 151.239 23.4 158.023 23.4C160.391 23.4 162.759 23.656 165.127 24.168C165.831 25.832 166.151 28.04 166.087 30.792C160.583 30.792 155.783 32.008 151.687 34.44C147.591 36.872 144.423 40.2 142.183 44.424C140.007 48.648 138.919 53.352 138.919 58.536C138.919 63.976 139.879 68.072 141.799 70.824C143.783 73.512 146.535 74.856 150.055 74.856C152.999 74.856 155.655 74.056 158.023 72.456C160.391 70.792 162.343 68.456 163.879 65.448C165.415 62.376 166.407 58.792 166.855 54.696C164.359 53.224 162.503 51.496 161.287 49.512C160.071 47.464 159.463 45.064 159.463 42.312C159.463 40.136 159.911 38.152 160.807 36.36C161.767 34.504 163.047 33.064 164.647 32.04C166.247 31.016 168.007 30.504 169.927 30.504C173.383 30.504 176.135 31.912 178.183 34.728C180.295 37.544 181.351 41.32 181.351 46.056C181.351 52.904 179.847 59.176 176.839 64.872C173.831 70.568 169.767 75.08 164.647 78.408C159.527 81.736 153.895 83.4 147.751 83.4ZM209.161 83.4C205.641 83.4 202.537 82.472 199.849 80.616C197.161 78.76 195.081 76.136 193.609 72.744C192.137 69.288 191.401 65.32 191.401 60.84C191.401 54.12 193.001 48.104 196.201 42.792C199.465 37.48 203.945 33.32 209.641 30.312C215.401 27.304 221.897 25.8 229.129 25.8C232.137 25.8 234.857 26.056 237.289 26.568C238.057 28.36 238.441 30.568 238.441 33.192C232.617 33.192 227.337 34.312 222.601 36.552C217.929 38.728 214.249 41.736 211.561 45.576C208.937 49.416 207.625 53.704 207.625 58.44C207.625 62.024 208.361 64.808 209.833 66.792C211.369 68.776 213.481 69.768 216.169 69.768C219.049 69.768 221.865 68.552 224.617 66.12C227.433 63.688 229.673 60.424 231.337 56.328L230.665 69.768L228.649 68.904C226.601 73.512 223.881 77.096 220.489 79.656C217.097 82.152 213.321 83.4 209.161 83.4ZM238.537 83.4C235.401 83.4 233.097 82.472 231.625 80.616C230.217 78.76 229.513 75.88 229.513 71.976C229.513 69.48 230.089 64.552 231.241 57.192C232.393 49.768 233.897 40.68 235.753 29.928C236.073 27.944 236.393 26.056 236.713 24.264C237.097 22.408 237.417 20.68 237.673 19.08L232.777 12.456C235.145 10.664 237.673 9.256 240.361 8.232C243.049 7.144 245.609 6.6 248.041 6.6C250.601 6.6 252.393 7.08 253.417 8.04C254.441 8.99999 254.953 10.6 254.953 12.84C254.953 14.312 254.697 16.392 254.185 19.08C253.673 21.704 252.969 25.032 252.073 29.064C250.217 37.32 248.713 44.712 247.561 51.24C246.473 57.768 245.929 64.296 245.929 70.824C245.929 73.128 246.153 74.888 246.601 76.104C247.049 77.32 247.721 78.44 248.617 79.464C247.145 80.744 245.513 81.704 243.721 82.344C241.929 83.048 240.201 83.4 238.537 83.4ZM275.307 83.4C272.043 83.4 269.643 82.6 268.107 81C266.635 79.336 265.899 76.84 265.899 73.512C265.899 70.952 266.507 66.568 267.723 60.36C268.939 54.152 270.635 46.088 272.811 36.168L267.915 29.352C270.411 27.56 273.035 26.12 275.787 25.032C278.603 23.944 281.227 23.4 283.659 23.4C286.027 23.4 287.691 23.912 288.651 24.936C289.675 25.896 290.187 27.528 290.187 29.832C290.187 30.472 289.963 31.784 289.515 33.768C289.067 35.688 288.587 37.832 288.075 40.2C286.347 47.112 284.971 53.224 283.947 58.536C282.923 63.848 282.411 68.392 282.411 72.168C282.411 75.624 283.243 78.088 284.907 79.56C281.899 82.12 278.699 83.4 275.307 83.4ZM282.219 16.968C279.531 16.968 277.387 16.36 275.787 15.144C274.187 13.864 273.387 12.136 273.387 9.96C273.387 8.168 273.931 6.568 275.019 5.16C276.107 3.752 277.515 2.696 279.243 1.992C280.971 1.224 282.763 0.839996 284.619 0.839996C287.243 0.839996 289.355 1.48 290.955 2.75999C292.619 3.97599 293.451 5.64 293.451 7.752C293.451 10.376 292.331 12.584 290.091 14.376C287.915 16.104 285.291 16.968 282.219 16.968ZM324.814 83.4C317.326 83.4 311.47 81.32 307.246 77.16C303.022 72.936 300.91 67.08 300.91 59.592C300.91 52.744 302.478 46.568 305.614 41.064C308.75 35.56 313.102 31.24 318.67 28.104C324.302 24.968 330.574 23.4 337.486 23.4C343.054 23.4 347.374 24.616 350.446 27.048C353.518 29.48 355.054 32.872 355.054 37.224C355.054 41.768 353.454 45.672 350.254 48.936C347.118 52.2 342.542 54.664 336.526 56.328C330.51 57.992 323.31 58.792 314.926 58.728L316.174 52.296C324.046 52.104 330.126 50.792 334.414 48.36C338.702 45.864 340.846 42.536 340.846 38.376C340.846 36.648 340.302 35.272 339.214 34.248C338.126 33.16 336.686 32.616 334.894 32.616C331.758 32.616 328.814 33.864 326.062 36.36C323.374 38.856 321.198 42.216 319.534 46.44C317.934 50.664 317.134 55.176 317.134 59.976C317.134 64.648 317.966 68.296 319.63 70.92C321.294 73.544 323.598 74.856 326.542 74.856C330.126 74.856 333.07 73.608 335.374 71.112C337.678 68.616 338.926 65.352 339.118 61.32C342.446 61.32 344.974 61.928 346.702 63.144C348.494 64.36 349.39 66.152 349.39 68.52C349.39 71.208 348.302 73.704 346.125 76.008C343.95 78.248 340.974 80.04 337.198 81.384C333.486 82.728 329.358 83.4 324.814 83.4ZM415.327 83.496C411.807 83.496 409.279 82.536 407.743 80.616C406.271 78.696 405.535 75.656 405.535 71.496C405.535 68.104 406.079 62.696 407.167 55.272C408.319 47.784 410.271 36.296 413.023 20.808L429.919 24.072L427.807 36.168C426.143 45.64 424.895 52.872 424.063 57.864C423.231 62.856 422.815 66.312 422.815 68.232C422.815 73.416 423.711 77.288 425.503 79.848C422.175 82.28 418.783 83.496 415.327 83.496ZM437.023 30.696C434.975 30.696 432.863 30.568 430.687 30.312C428.575 29.992 426.079 29.544 423.199 28.968C420.511 28.456 418.047 28.072 415.807 27.816C413.631 27.496 411.487 27.336 409.375 27.336L394.495 30.504C393.535 28.328 393.055 25.864 393.055 23.112C393.055 19.592 394.143 16.936 396.319 15.144C398.495 13.288 401.567 12.36 405.535 12.36C407.583 12.36 409.727 12.52 411.967 12.84C414.207 13.096 416.703 13.48 419.455 13.992C422.335 14.568 424.799 15.016 426.847 15.336C428.959 15.592 431.071 15.752 433.183 15.816L448.062 12.552C449.023 14.664 449.503 17.128 449.503 19.944C449.503 23.272 448.383 25.896 446.143 27.816C443.967 29.736 440.927 30.696 437.023 30.696ZM468.549 83.4C465.797 83.4 463.589 82.824 461.925 81.672C460.325 80.52 459.141 78.696 458.373 76.2C457.605 73.704 457.221 70.344 457.221 66.12C457.221 62.984 457.253 60.616 457.317 59.016C457.381 53 457.317 48.232 457.125 44.712C456.997 41.128 456.517 37.768 455.685 34.632C454.853 31.496 453.509 28.904 451.653 26.856C454.597 24.552 457.797 23.4 461.253 23.4C464.069 23.4 466.309 24.2 467.973 25.8C469.701 27.4 470.981 30.088 471.813 33.864C472.709 37.576 473.157 42.728 473.157 49.32L473.061 62.568C472.997 66.408 472.965 69.896 472.965 73.032H473.925C479.237 67.08 483.205 61.032 485.829 54.888C488.453 48.68 490.021 43.56 490.533 39.528C490.597 39.272 490.629 39.048 490.629 38.856C490.629 38.6 490.629 38.376 490.629 38.184C490.629 37.288 490.501 36.36 490.245 35.4C489.989 34.376 489.701 33.384 489.381 32.424C488.997 31.464 488.645 30.568 488.325 29.736C489.285 28.648 490.277 27.816 491.301 27.24C492.389 26.6 493.445 26.28 494.469 26.28C496.901 26.28 498.757 26.984 500.037 28.392C501.317 29.8 501.957 31.816 501.957 34.44C501.957 37.96 501.125 42.056 499.461 46.728C497.797 51.4 495.493 56.392 492.549 61.704C492.293 62.152 492.005 62.632 491.685 63.144C491.429 63.592 491.173 64.072 490.917 64.584C488.101 69.192 485.637 72.808 483.525 75.432C481.413 78.056 479.141 80.04 476.709 81.384C474.341 82.728 471.621 83.4 468.549 83.4ZM502.245 83.4C499.173 83.4 496.741 82.76 494.949 81.48C493.221 80.2 491.941 78.312 491.109 75.816C490.341 73.256 489.765 69.832 489.381 65.544L486.405 29.352C487.749 28.264 489.125 27.496 490.533 27.048C491.941 26.536 493.253 26.28 494.469 26.28L497.637 31.944L499.653 73.032H500.613C506.053 63.944 510.149 56.04 512.901 49.32C515.653 42.6 517.029 37.608 517.029 34.344C517.029 31.656 516.421 29.16 515.205 26.856C516.805 25.768 518.533 24.936 520.389 24.36C522.309 23.72 524.197 23.4 526.053 23.4C528.421 23.4 530.213 24.072 531.429 25.416C532.645 26.696 533.253 28.584 533.253 31.08C533.253 33.32 532.741 36.072 531.717 39.336C530.693 42.536 528.965 46.728 526.533 51.912C524.165 57.032 520.869 63.752 516.645 72.072L518.565 76.296C516.645 78.344 514.149 80.04 511.077 81.384C508.005 82.728 505.061 83.4 502.245 83.4ZM553.744 83.4C550.48 83.4 548.08 82.6 546.544 81C545.072 79.336 544.336 76.84 544.336 73.512C544.336 70.952 544.944 66.568 546.16 60.36C547.376 54.152 549.072 46.088 551.248 36.168L546.352 29.352C548.848 27.56 551.472 26.12 554.224 25.032C557.04 23.944 559.664 23.4 562.096 23.4C564.464 23.4 566.128 23.912 567.088 24.936C568.112 25.896 568.624 27.528 568.624 29.832C568.624 30.472 568.4 31.784 567.952 33.768C567.504 35.688 567.024 37.832 566.512 40.2C564.784 47.112 563.408 53.224 562.384 58.536C561.36 63.848 560.848 68.392 560.848 72.168C560.848 75.624 561.68 78.088 563.344 79.56C560.336 82.12 557.136 83.4 553.744 83.4ZM560.656 16.968C557.968 16.968 555.824 16.36 554.224 15.144C552.624 13.864 551.824 12.136 551.824 9.96C551.824 8.168 552.368 6.568 553.456 5.16C554.544 3.752 555.952 2.696 557.68 1.992C559.408 1.224 561.2 0.839996 563.056 0.839996C565.68 0.839996 567.792 1.48 569.392 2.75999C571.056 3.97599 571.888 5.64 571.888 7.752C571.888 10.376 570.768 12.584 568.528 14.376C566.352 16.104 563.728 16.968 560.656 16.968ZM600.371 83.4C592.755 83.4 587.091 82.408 583.379 80.424C579.667 78.44 577.811 75.752 577.811 72.36C577.811 70.824 578.227 69.288 579.059 67.752C579.955 66.216 581.203 64.904 582.803 63.816C584.467 66.952 586.707 69.384 589.523 71.112C592.339 72.84 595.635 73.704 599.411 73.704C602.483 73.704 605.235 73.064 607.667 71.784C610.163 70.504 611.411 68.68 611.411 66.312C611.411 64.84 610.547 63.656 608.819 62.76C607.155 61.864 604.435 60.776 600.659 59.496C596.627 58.28 593.299 57.064 590.675 55.848C588.051 54.632 585.779 52.968 583.859 50.856C581.939 48.68 580.979 45.928 580.979 42.6C580.979 38.44 582.291 34.92 584.915 32.04C587.603 29.16 591.187 27.016 595.667 25.608C600.211 24.136 605.299 23.4 610.931 23.4C617.011 23.4 621.875 24.328 625.523 26.184C629.235 28.04 631.091 30.472 631.091 33.48C631.091 36.168 630.163 38.28 628.307 39.816C626.451 41.288 624.147 42.024 621.395 42.024C618.835 42.024 616.499 41.224 614.387 39.624C612.339 37.96 610.739 35.592 609.587 32.52C605.875 32.904 602.835 33.832 600.467 35.304C598.163 36.776 597.011 38.568 597.011 40.68C597.011 41.832 597.491 42.824 598.451 43.656C599.411 44.488 600.595 45.192 602.003 45.768C603.411 46.28 605.459 46.984 608.147 47.88C612.179 49.16 615.475 50.408 618.035 51.624C620.595 52.776 622.803 54.44 624.659 56.616C626.515 58.792 627.443 61.576 627.443 64.968C627.443 68.936 626.131 72.328 623.507 75.144C620.947 77.896 617.587 79.944 613.427 81.288C609.267 82.696 604.915 83.4 600.371 83.4ZM655.357 83.4C652.477 83.4 650.205 82.632 648.541 81.096C646.877 79.624 646.045 76.84 646.045 72.744C646.045 69.672 646.461 66.088 647.293 61.992C648.125 57.896 649.277 52.968 650.749 47.208C651.837 42.728 652.669 39.176 653.245 36.552C653.821 33.864 654.109 31.656 654.109 29.928C654.109 26.984 653.629 23.912 652.669 20.712L652.285 19.752C654.205 18.024 656.413 16.648 658.909 15.624C661.405 14.536 663.933 13.992 666.493 13.992C668.797 13.992 670.461 14.504 671.485 15.528C672.509 16.552 673.021 18.248 673.021 20.616C673.021 21.832 672.733 23.56 672.157 25.8C671.581 28.04 670.813 30.76 669.853 33.96C667.677 41.128 665.949 47.56 664.669 53.256C663.453 58.952 662.781 64.808 662.653 70.824L667.165 78.312C665.437 79.976 663.517 81.224 661.405 82.056C659.293 82.952 657.277 83.4 655.357 83.4ZM648.829 39.816C646.653 39.816 645.149 39.496 644.317 38.856C643.485 38.152 643.069 36.936 643.069 35.208C643.069 33.416 643.581 31.464 644.605 29.352C646.973 30.12 649.949 30.504 653.533 30.504C656.413 30.504 660.061 30.152 664.477 29.448C666.269 29.192 668.125 28.968 670.045 28.776C671.965 28.52 673.725 28.392 675.325 28.392C677.501 28.392 679.005 28.744 679.837 29.448C680.669 30.152 681.085 31.368 681.085 33.096C681.085 34.824 680.573 36.744 679.549 38.856C678.397 38.472 677.021 38.184 675.421 37.992C673.821 37.8 672.253 37.704 670.717 37.704C668.989 37.704 667.197 37.8 665.341 37.992C663.549 38.184 661.661 38.44 659.677 38.76C654.877 39.464 651.261 39.816 648.829 39.816ZM687.616 100.2C682.752 100.2 679.072 99.336 676.575 97.608C674.015 95.88 672.735 93.448 672.735 90.312C672.735 88.84 673.119 87.368 673.887 85.896C674.591 84.488 675.423 83.368 676.383 82.536C677.599 84.2 679.135 85.576 680.992 86.664C682.912 87.752 685.44 88.296 688.576 88.296C693.568 88.296 699.04 86.152 704.992 81.864C710.944 77.64 716.032 71.304 720.256 62.856C724.48 54.344 726.592 44.168 726.592 32.328C726.592 30.216 726.464 28.392 726.208 26.856C727.616 25.768 729.12 24.936 730.72 24.36C732.32 23.72 733.856 23.4 735.328 23.4C740.448 23.4 743.008 25.864 743.008 30.792C743.008 39.496 740.64 49.352 735.904 60.36C731.232 71.304 724.672 80.68 716.224 88.488C707.84 96.296 698.304 100.2 687.616 100.2ZM707.584 83.4C702.144 83.4 698.112 81.992 695.488 79.176C692.928 76.296 691.328 72.808 690.688 68.712C690.048 64.552 689.696 59.048 689.632 52.2C689.568 47.592 689.44 43.88 689.248 41.064C689.056 38.184 688.544 35.496 687.712 33C686.944 30.44 685.696 28.392 683.968 26.856C686.848 24.552 690.048 23.4 693.568 23.4C697.408 23.4 700.192 24.68 701.92 27.24C703.712 29.736 704.8 32.84 705.184 36.552C705.568 40.2 705.728 45.096 705.664 51.24C705.664 57 705.824 61.608 706.144 65.064C706.464 68.456 707.392 71.304 708.928 73.608C710.528 75.912 712.96 77.064 716.224 77.064L707.584 83.4Z" fill="black" />
                </svg>
                <img src={assets.title_icon} alt="" />
            </div>
            <div className="loader">
                <div className="loading-bar-background">
                    <div className="loading-bar">
                        <div className="white-bars-container">
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                            <div className="white-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadAnimation