function threeSum(target) {
// write your code here
        let str = "";
        let tempStr = "";
        let temp = 0;
        while(nums !==0){
          temp = nums%2;
          
          str = str + temp;
          nums = nums/2;
        }
        System.out.println(str);
        
        for(let i=str.length-1;i>=0;i--){
            tempStr = tempStr + str.charAt(i);
        }
        return tempStr;
}

module.exports = threeSum;
