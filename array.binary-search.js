(!Array.prototype.binarySearch)
{
    Array.prototype.binarySearch = function (value) {
        var minIndex = 0;
        var maxIndex = this.length - 1;
        var currentIndex;
        var currentElement;
        var returnObject = false;
        var compareMethod;


        if (arguments.length == 2) // we've been give a value and a compare function
        {
            compareMethod = arguments[1];
        }
        else if (arguments.length == 3) // we've been given a value, compare function, and bool as to if we want to get the object instead of the index;
        {
                compareMethod = arguments[1];
                if (arguments[2])
                    returnObject = true;
        }
        

        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = this[currentIndex];
            var result;

            if (compareMethod == undefined)
            {

                if (result < 0)
                    minIndex = currentIndex + 1;
                else if (result > 0)
                    maxIndex = currentIndex - 1;
                else
                    return currentIndex;                
            }
            else
            {

                result = compareMethod.call(this, value, currentElement);

                if (result < 0)
                    minIndex = currentIndex + 1;
                else if (result > 0)
                    maxIndex = currentIndex - 1;
                else
                {
                    if (returnObject)
                        return currentElement;
                    else
                        return currentIndex;
                }
        }
        }
        return undefined;
    }
};
