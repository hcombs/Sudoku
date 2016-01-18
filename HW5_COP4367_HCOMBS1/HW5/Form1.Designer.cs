namespace HW5
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.gamecreate = new System.Windows.Forms.Button();
            this.loadgame = new System.Windows.Forms.Button();
            this.savebtn = new System.Windows.Forms.Button();
            this.quit = new System.Windows.Forms.Button();
            this.easy = new System.Windows.Forms.Button();
            this.medium = new System.Windows.Forms.Button();
            this.hard = new System.Windows.Forms.Button();
            this.Difficulty_Label = new System.Windows.Forms.Label();
            this.IgiveUp = new System.Windows.Forms.Button();
            this.lbltime = new System.Windows.Forms.Label();
            this.gameboard = new System.Windows.Forms.DataGridView();
            this.AnswerStatus = new System.Windows.Forms.Label();
            this.Anslabel1 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.gameboard)).BeginInit();
            this.SuspendLayout();
            // 
            // gamecreate
            // 
            this.gamecreate.BackColor = System.Drawing.Color.SkyBlue;
            this.gamecreate.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.gamecreate.Location = new System.Drawing.Point(12, 46);
            this.gamecreate.Name = "gamecreate";
            this.gamecreate.Size = new System.Drawing.Size(75, 23);
            this.gamecreate.TabIndex = 0;
            this.gamecreate.Text = "New Game";
            this.gamecreate.UseVisualStyleBackColor = false;
            this.gamecreate.Click += new System.EventHandler(this.NewGame_Click);
            this.gamecreate.MouseLeave += new System.EventHandler(this.leave);
            this.gamecreate.MouseHover += new System.EventHandler(this.hover);
            // 
            // loadgame
            // 
            this.loadgame.BackColor = System.Drawing.Color.SkyBlue;
            this.loadgame.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.loadgame.Location = new System.Drawing.Point(12, 75);
            this.loadgame.Name = "loadgame";
            this.loadgame.Size = new System.Drawing.Size(75, 23);
            this.loadgame.TabIndex = 1;
            this.loadgame.Text = "Load Game";
            this.loadgame.UseVisualStyleBackColor = false;
            this.loadgame.Click += new System.EventHandler(this.LoadGame_Click);
            this.loadgame.MouseLeave += new System.EventHandler(this.leave);
            this.loadgame.MouseHover += new System.EventHandler(this.hover);
            // 
            // savebtn
            // 
            this.savebtn.BackColor = System.Drawing.Color.SkyBlue;
            this.savebtn.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.savebtn.Location = new System.Drawing.Point(12, 75);
            this.savebtn.Name = "savebtn";
            this.savebtn.Size = new System.Drawing.Size(75, 23);
            this.savebtn.TabIndex = 2;
            this.savebtn.Text = "Save Game";
            this.savebtn.UseVisualStyleBackColor = false;
            this.savebtn.Click += new System.EventHandler(this.Save_Game);
            this.savebtn.MouseLeave += new System.EventHandler(this.leave);
            this.savebtn.MouseHover += new System.EventHandler(this.hover);
            // 
            // quit
            // 
            this.quit.BackColor = System.Drawing.Color.SkyBlue;
            this.quit.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.quit.Location = new System.Drawing.Point(12, 104);
            this.quit.Name = "quit";
            this.quit.Size = new System.Drawing.Size(75, 23);
            this.quit.TabIndex = 3;
            this.quit.Text = "Quit";
            this.quit.UseVisualStyleBackColor = false;
            this.quit.Click += new System.EventHandler(this.Quit_Game);
            this.quit.MouseLeave += new System.EventHandler(this.leave);
            this.quit.MouseHover += new System.EventHandler(this.hover);
            // 
            // easy
            // 
            this.easy.BackColor = System.Drawing.Color.SkyBlue;
            this.easy.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.easy.Location = new System.Drawing.Point(194, 75);
            this.easy.Name = "easy";
            this.easy.Size = new System.Drawing.Size(75, 23);
            this.easy.TabIndex = 5;
            this.easy.Text = "Easy";
            this.easy.UseVisualStyleBackColor = false;
            this.easy.Click += new System.EventHandler(this.difficultySelection);
            this.easy.MouseLeave += new System.EventHandler(this.leave);
            this.easy.MouseHover += new System.EventHandler(this.hover);
            // 
            // medium
            // 
            this.medium.BackColor = System.Drawing.Color.SkyBlue;
            this.medium.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.medium.Location = new System.Drawing.Point(275, 75);
            this.medium.Name = "medium";
            this.medium.Size = new System.Drawing.Size(75, 23);
            this.medium.TabIndex = 6;
            this.medium.Text = "Medium";
            this.medium.UseVisualStyleBackColor = false;
            this.medium.Click += new System.EventHandler(this.difficultySelection);
            this.medium.MouseLeave += new System.EventHandler(this.leave);
            this.medium.MouseHover += new System.EventHandler(this.hover);
            // 
            // hard
            // 
            this.hard.BackColor = System.Drawing.Color.SkyBlue;
            this.hard.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.hard.Location = new System.Drawing.Point(356, 75);
            this.hard.Name = "hard";
            this.hard.Size = new System.Drawing.Size(75, 23);
            this.hard.TabIndex = 7;
            this.hard.Text = "Hard";
            this.hard.UseVisualStyleBackColor = false;
            this.hard.Click += new System.EventHandler(this.difficultySelection);
            this.hard.MouseLeave += new System.EventHandler(this.leave);
            this.hard.MouseHover += new System.EventHandler(this.hover);
            // 
            // Difficulty_Label
            // 
            this.Difficulty_Label.AutoSize = true;
            this.Difficulty_Label.Location = new System.Drawing.Point(272, 46);
            this.Difficulty_Label.Name = "Difficulty_Label";
            this.Difficulty_Label.Size = new System.Drawing.Size(80, 13);
            this.Difficulty_Label.TabIndex = 8;
            this.Difficulty_Label.Text = "Select Difficulty";
            // 
            // IgiveUp
            // 
            this.IgiveUp.BackColor = System.Drawing.Color.SkyBlue;
            this.IgiveUp.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.IgiveUp.Location = new System.Drawing.Point(12, 46);
            this.IgiveUp.Name = "IgiveUp";
            this.IgiveUp.Size = new System.Drawing.Size(75, 23);
            this.IgiveUp.TabIndex = 9;
            this.IgiveUp.Text = "I Give Up";
            this.IgiveUp.UseVisualStyleBackColor = false;
            this.IgiveUp.Click += new System.EventHandler(this.GiveUp_Click);
            this.IgiveUp.MouseLeave += new System.EventHandler(this.leave);
            this.IgiveUp.MouseHover += new System.EventHandler(this.hover);
            // 
            // lbltime
            // 
            this.lbltime.AutoSize = true;
            this.lbltime.Location = new System.Drawing.Point(295, 338);
            this.lbltime.Name = "lbltime";
            this.lbltime.Size = new System.Drawing.Size(35, 13);
            this.lbltime.TabIndex = 10;
            this.lbltime.Text = "label1";
            this.lbltime.Click += new System.EventHandler(this.label1_Click);
            // 
            // gameboard
            // 
            this.gameboard.AllowUserToAddRows = false;
            this.gameboard.AllowUserToDeleteRows = false;
            this.gameboard.AllowUserToResizeColumns = false;
            this.gameboard.AllowUserToResizeRows = false;
            this.gameboard.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gameboard.ColumnHeadersVisible = false;
            this.gameboard.Location = new System.Drawing.Point(129, 23);
            this.gameboard.Name = "gameboard";
            this.gameboard.RowHeadersVisible = false;
            this.gameboard.Size = new System.Drawing.Size(365, 312);
            this.gameboard.TabIndex = 11;
            this.gameboard.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.gameboard_CellClick);
            this.gameboard.CellValidating += new System.Windows.Forms.DataGridViewCellValidatingEventHandler(this.gameboard_CellValidating);
            // 
            // AnswerStatus
            // 
            this.AnswerStatus.AutoSize = true;
            this.AnswerStatus.Location = new System.Drawing.Point(13, 177);
            this.AnswerStatus.Name = "AnswerStatus";
            this.AnswerStatus.Size = new System.Drawing.Size(0, 13);
            this.AnswerStatus.TabIndex = 12;
            // 
            // Anslabel1
            // 
            this.Anslabel1.AutoSize = true;
            this.Anslabel1.Location = new System.Drawing.Point(19, 177);
            this.Anslabel1.Name = "Anslabel1";
            this.Anslabel1.Size = new System.Drawing.Size(0, 13);
            this.Anslabel1.TabIndex = 13;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(540, 360);
            this.Controls.Add(this.Anslabel1);
            this.Controls.Add(this.AnswerStatus);
            this.Controls.Add(this.gameboard);
            this.Controls.Add(this.lbltime);
            this.Controls.Add(this.IgiveUp);
            this.Controls.Add(this.Difficulty_Label);
            this.Controls.Add(this.hard);
            this.Controls.Add(this.medium);
            this.Controls.Add(this.easy);
            this.Controls.Add(this.quit);
            this.Controls.Add(this.savebtn);
            this.Controls.Add(this.loadgame);
            this.Controls.Add(this.gamecreate);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.gameboard)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button gamecreate;
        private System.Windows.Forms.Button loadgame;
        private System.Windows.Forms.Button savebtn;
        private System.Windows.Forms.Button quit;
        private System.Windows.Forms.Button easy;
        private System.Windows.Forms.Button medium;
        private System.Windows.Forms.Button hard;
        private System.Windows.Forms.Label Difficulty_Label;
        private System.Windows.Forms.Button IgiveUp;
        private System.Windows.Forms.Label lbltime;
        private System.Windows.Forms.DataGridView gameboard;
        private System.Windows.Forms.Label AnswerStatus;
        private System.Windows.Forms.Label Anslabel1;
    }
}

