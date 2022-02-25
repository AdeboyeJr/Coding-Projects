import pygame, sys, random

# General setup
class Crosshair(pygame.sprite.Sprite):

    idle = pygame.image.load("crosshair.png")

    shooting = pygame.image.load("shooting.png")

    def __init__(self):
        
        super().__init__()

        self.image = Crosshair.idle
   
        self.rect = self.image.get_rect()

        self.gunshot = pygame.mixer.Sound("gunshot.wav")

        self.hit_count = 0

    def shoot(self):

        self.gunshot.play()

        hits = pygame.sprite.spritecollide(crosshair, target_group, True)

        for hit in hits:

            self.hit_count += 1




    def update(self):

        self.rect.center = pygame.mouse.get_pos()

        

class Target(pygame.sprite.Sprite):

    def __init__(self, picture_path, pos_x, pos_y):
        super().__init__()

        self.image = pygame.image.load(picture_path)
        self.rect = self.image.get_rect()
        self.rect.center = (pos_x, pos_y)



pygame.init()

clock = pygame.time.Clock()

# Game Screen
SCREEN_WIDTH = 1920
SCREEN_HEIGHT = 1080
SCREEN = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

BG_LIST = [pygame.image.load("BG.png"), pygame.image.load("BG2.png")]


CURR_BG = BG_LIST[random.randrange(0,2)]
pygame.mouse.set_visible(False)

# Crosshair
crosshair = Crosshair()
crosshair_group = pygame.sprite.Group()
crosshair_group.add(crosshair)

# Target

target_group = pygame.sprite.Group()
for target in range(20):

    new_target = Target("target.png", random.randrange(0, SCREEN_WIDTH), random.randrange(0, SCREEN_HEIGHT))
    target_group.add(new_target)



while True:

    pygame.display.set_caption("Target Game")

    font = pygame.font.SysFont("comicsans", 24)

    text = font.render(f"Hits: {crosshair.hit_count}", True, (255, 255, 255))

    # textRect = text.get_rect()

    for event in pygame.event.get():
        
        if event.type == pygame.QUIT:

            pygame.quit()
            sys.exit()

        if event.type == pygame.MOUSEBUTTONDOWN:
            crosshair.shoot()
            crosshair.image = Crosshair.shooting

        if event.type == pygame.MOUSEBUTTONUP:

            crosshair.image = Crosshair.idle



    pygame.display.flip()
    SCREEN.blit(CURR_BG, (0,0))

   

    target_group.draw(SCREEN)
    crosshair_group.draw(SCREEN)
    crosshair_group.update()

    SCREEN.blit(text, (10, 10))

    clock.tick(60)