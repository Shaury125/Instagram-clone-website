

function StoryBox() {
    return (
        <div className="w-20 h-25">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full cursor-pointer">
                <img className="rounded-full w-18 relative top-1 left-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Story" />
            </div>
            <p className="text-center text-xs mt-1">User Name</p>
        </div>
    );
}

export default StoryBox;