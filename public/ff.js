(function() {
    "use strict"

    var game = new Phaser.Game(500, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var beltR1;
    var beltR2;
    var beltR3;
    var belts = [];

    function preload() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = '#eee';
        
        const spritesPath = "./assets/sprites/";
        game.load.atlasJSONHash(
            'beltR', 
            spritesPath + 'BeltR.png', 
            spritesPath + 'BeltR.json');
            
        game.input.mouse.capture = true;
    }

    function create() {
        beltR1 = game.add.sprite(0, 180, 'beltR', 'BeltR1.png');
        beltR1.animations.add(
            'run', 
            Phaser.Animation.generateFrameNames(
                'BeltR', 1, 6, '.png', 1), 20, true, false);
        beltR1.animations.play('run');
        
        beltR2 = game.add.sprite(75, 205, 'beltR', 'BeltR1.png');
        beltR2.anchor.setTo(0.5, 0.5);
        //beltR2.angle = 45;
        beltR2.animations.add(
            'run', 
            Phaser.Animation.generateFrameNames(
                'BeltR', 1, 6, '.png', 1), 20, true, false);
        beltR2.animations.play('run');
        
        beltR3 = game.add.sprite(125, 205, 'beltR', 'BeltR1.png');
        beltR3.anchor.setTo(0.5, 0.5);
        beltR3.angle = 90;
        beltR3.animations.add(
            'run', 
            Phaser.Animation.generateFrameNames(
                'BeltR', 1, 6, '.png', 1), 20, true, false);
        beltR3.animations.play('run');
        
        game.input.onUp.add(fire, this);
    }

    function update() {
        if (game.input.activePointer.isDown)
        {
            //fire();
        }
    }
    
    function fire(){
        console.log(game.input.activePointer);
        var x = game.input.activePointer.x;
        var y = game.input.activePointer.y;
        var belt = game.add.sprite(x, y, 'beltR', 'BeltR1.png');
        belt.anchor.setTo(0.5, 0.5);
        belt.animations.add(
            'run', 
            Phaser.Animation.generateFrameNames(
                'BeltR', 1, 6, '.png', 1), 20, true, false);
        belt.animations.play('run');
        belts.push(belt);
    }

})()